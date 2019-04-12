# Pivotal-Slack Notification (Lambda)
Simple Lambda that triggers Slack notification upon Pivotal Tracker changes

This repository demonstrates how Pivotal Tracker notifies AWS API Gateway which in turn triggers a lambda function to broadcast specific Slack channel. 

![](./pivotal-slack.png)

## Setting Up
Create an incoming WebHooks in Slack
1. Select the channel to post messages
2. Copy the WebHook URL eg. https://hooks.slack.com/services/T00000000/B00000000/XXXXXXXXXXXXXXXXXXXXXXXX
3. Customize your icon or use the Pivotal Track icon <img src="./pivotal-track-icon.png" width="20" height="20"> (optional)

For more information, refer to this documentaion on [incoming webhooks](https://api.slack.com/incoming-webhooks)

Create lambda function and API Gateway in AWS
1. Create lambda function from scratch
2. Enter a name for this function and select Node.js 8.10 as runtime
3. Use "Create role with basic Lambda permissions"
4. Under Designer, add a API Gateway trigger. Configure the trigger with a new API and Open security
5. Under additional settings, enter a name for the API and deployment stage eg. Production
6. Click Save
7. Go to your function code editor and paste index.js 
8. Replace the following tags slack_channel and slack_webhook_endpoint
9. Create a test case by using the [index.test.json](./index.test.json)
10. Deploy API and copy the invoke URL for POST method

Activate Web Hook in Pivotal Tracker
1. Under the Project > More > Webhooks
2. Paste the API URL in the activity web hook field and click ADD

For more information, refer to this documentation on [activity webhook](https://www.pivotaltracker.com/help/articles/activity_webhook/)
