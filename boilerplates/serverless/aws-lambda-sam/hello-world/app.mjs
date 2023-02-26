import got from "got";

export const lambdaHandler = async (event, context) => {
  try {

    console.log("Received event", event);
    console.log("Received context", context);

    const response = await got("https://aws.random.cat/meow");
    console.log(response.body);

    return {
      status: 200,
      body: JSON.parse(response.body)
    };

  } catch (err) {
    console.log(err);
    return err;
  }
};
