import { config } from "dotenv";
config();

import { safeLoad } from "js-yaml";
import { writeFile } from "fs-extra";

import { google } from "googleapis";
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
};

update();
