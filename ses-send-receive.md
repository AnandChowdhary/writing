# AWS SES send and receive emails

## Good to know

- Maximum email size (including headers) is 30 MB when storing in S3 ([source](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html))

## Set up your domain

Go to https://eu-central-1.console.aws.amazon.com/ses/home and select "Domains" and "Verify a New Domain"

Enter domain and check "Generate DKIM settings"

Add DNS records for TXT, CNAME (3x), and MX (for receiving)

Wait for verification (could be a few minutes to a few hours)

## Request sending limit increase

Select "Sending Statistics" in sidebar and click on "Request a Sending Limit Increase" if you're in sandbox mode

Under "Mail Type - optional", select "Transactional" (unless you're sending marketing emails)

Under "Describe how you will comply with AWS Service Terms  and AUP  - optional", write "We're building an application for professionals which aims to be a Software-as-a-Service (SaaS) business. For this, transactional emails need to be sent like password reset and billing confirmations."

Under "Describe how you will only send to recipients who have specifically requested your mail - optional", write "AWS SES will only be used to email registered users who have explicitly permitted receiving emails, and they can revoke that permission any time. It will not be used for marketing emails, only transactional emails like password reset and billing confirmations."

Under "Describe the process that you will follow when you receive bounce and complaint notifications - optional", write "We have a serverless function set up that handles bounces and complaints by forwarding it to human support, and once we've seen an email is bounced, we ask the end user to update their email and don't send additional emails to that address."

Under "Use case description", copy and paste the response from all three above

Under "Region", select your AWS SES region (like "EU - Frankfurt")

Under "Limit", select "Desired Maximum Send Quota" and under "New limit value", write "1000"

Click on "Add another request" and select the same AWS SES region, and under "Limit", select "Desired Maximum Send Rate" with "New limit value", of "25"

Click on "Submit" and wait for your limit to be increased to be able to send emails to any address

## Create an S3 bucket

Go to https://s3.console.aws.amazon.com/s3/home and click on "Create bucket"

Under "Bucket name", enter "YOUR_SITE_NAME-incoming-emails"

Under "Default encryption", check "Automatically encrypt objects when they are stored in S3." and click on "Next"

Keep "Block all public access" checked in the next step and click on "Next"

Click on "Create bucket" and click on the newly created bucket name

Go to the "Permissions" tab and click on "Bucket Policy"

Under "Bucket policy editor", copy and paste the following:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "AllowSESPuts",
            "Effect": "Allow",
            "Principal": {
                "Service": "ses.amazonaws.com"
            },
            "Action": "s3:PutObject",
            "Resource": "arn:aws:s3:::YOUR_BUCKET_ID/*",
            "Condition": {
                "StringEquals": {
                    "aws:Referer": "YOUR_ACCOUNT_ID"
                }
            }
        }
    ]
}
```

Replace "YOUR_BUCKET_ID" in the text with your bucket's name, and "YOUR_ACCOUNT_ID" with your AWS account ID (available at https://console.aws.amazon.com/billing/home)

Click on "Save"

## Set up receiving rules

You can only do this step once your AWS SES usage limit increase has been approved.

Go to https://console.aws.amazon.com/ses/

Click on "Rule Sets" under "Email Receiving" in the sidebar

Select "Create a Rule Set" and enter "YOUR_SITE_NAME-s3rule" under "Name"

Select "Set as Active Rule Set" and click on "Create a Rule Set"

Click on "View Active Rule Set" and select "Create Rule"

Leave "Recipients" blank and click on "Next"

Click on "Add action" under "Actions" and select "S3"

Under "S3 bucket", enter the name of the bucket created above and click on "Next Step"

Under "Rule Details", fill "save-email-to-s3" in "Rule name"

Make sure "Enabled" is checked 

Under "Rule set", make sure the newly created rule set is active and has "(Active)" in the name

Under "Insert after rule", select **the position**? (?)

Click on "Next Step" and then "Create Rule"

Test this rule is working by clicking on "Domains" in the sidebar, selecting the domain, and clicking "Send a Test Email". Fill the form and send the email, and then find it in the S3 bucket you just created.

## Envoke serverless function from S3

Go to https://eu-central-1.console.aws.amazon.com/lambda/home and click on "Create function"

Select "Author from Scratch"

Under "Function name", write "EmailForwarder"

Unde "Runtime", select "Node.js 12.x"

Under "Execution role", select "Create a new role with basic Lambda permissions"

Click on "Create function" and wait for the function to be created

Under "Function code", make sure "Edit code inline" is selected under "Code entry type"

Copy and paste the following in the code editor:

```js
exports.handler = async (event) => {
    try {
        const key = decodeURIComponent(event.Records[0].s3.object.key.replace(/\+/g, " "));
        // Here, we call the real webhook with this S3 object
        return {
            statusCode: 200,
            body: JSON.stringify({
                success: true,
                key
            }),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "An error occurred", error })
        }
    }
};
```

Click on "Save"

Scroll to "Basic settings" and click on "Edit"

Under "Memory (MB)", select the lowest memory (128 MB)

Under "Timeout", write "1" for "min" and "0" for sec and click on "Save"

Under "Designer", click on "Add trigger"

Under "Select a trigger", select "S3" from the list

Under "Bucket", enter the name of your created bucket

Under "Event type", select "All object create events"

Make sure "Enable trigger" is checked and click on "Add"

Go to https://eu-central-1.console.aws.amazon.com/ses/home and add Lambda action to the Receipt Rule. Configure the Receipt Rule to invoke the Lambda function that you created earlier.
