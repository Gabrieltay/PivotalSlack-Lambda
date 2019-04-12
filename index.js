var https = require("https");

exports.handler = (event, context, callback) => {
  const body = JSON.parse(event.body);

  const payload = JSON.stringify({
    channel: "#<slack channel>",
    username: "Pivotalbot",
    text: `[${body.project.name}] ${body.message} \n"${
      body.primary_resources[0].name
    }" \n${body.primary_resources[0].url}\n`
  });

  const options = {
    host: "hooks.slack.com",
    path: "/services/<slack webhook endpoint>",
    method: "POST"
  };

  const response = {
    statusCode: 200,
    body: JSON.stringify(`Hello from Lambda! - ${JSON.stringify(body.project)}`)
  };

  const req = https.request(options, res =>
    res.on("data", () => callback(null, "OK"))
  );
  req.on("error", error => callback(JSON.stringify(error)));

  req.write(payload);
  req.end();

  return response;
};
