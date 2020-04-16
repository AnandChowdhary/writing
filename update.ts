import { config } from "dotenv";
config();

import { safeLoad } from "js-yaml";
import { readFile, writeFile } from "fs-extra";
import { join } from "path";
import { google } from "googleapis";
import { googleDocsToMarkdown } from "docs-markdown";
import slugify from "@sindresorhus/slugify";

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_DOCS_CLIENT_ID,
  process.env.GOOGLE_DOCS_CLIENT_SECRET,
  "https://developers.google.com/oauthplayground"
);
oauth2Client.setCredentials({
  access_token: process.env.GOOGLE_DOCS_ACCESS,
  refresh_token: process.env.GOOGLE_DOCS_REFRESH,
});

const docs = google.docs("v1");

const update = async () => {
  console.log("Updating files from Google Docs");
  const yaml = await readFile(join(".", "docs.yml"), "utf8");
  const documentIds: string[] = safeLoad(yaml);

  for await (const documentId of documentIds) {
    console.log("Downloading document", documentId);
    try {
      const result = await docs.documents.get({
        documentId,
        auth: oauth2Client,
      });
      if (!result.data.title) throw new Error("Title not found");
      await writeFile(
        join(".", `${slugify(result.data.title)}.md`),
        googleDocsToMarkdown(result)
      );
      console.log("Downloaded document", result.data.title);
    } catch (error) {
      console.log("Got an error", error);
    }
  }
};

update();
