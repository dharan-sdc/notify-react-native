// sendNotification.js
const axios = require("axios");
const { GoogleAuth } = require("google-auth-library");

const serviceAccountPath = "./service-account.json"; // your file

async function getAccessToken() {
  const auth = new GoogleAuth({
    keyFile: serviceAccountPath,
    scopes: ["https://www.googleapis.com/auth/firebase.messaging"],
  });
  const client = await auth.getClient();
  const tokenResponse = await client.getAccessToken();
  return tokenResponse.token;
}



async function sendPushNotification(fcmToken) {
  const accessToken = await getAccessToken();

  const message = {
    message: {
      token: fcmToken,
      notification: {
        title: "Hello from Backend",
        body: "This is a push notification-test- 42",
      },
    },
  };

  try {
    const response = await axios.post(
      "https://fcm.googleapis.com/v1/projects/notify-ee7d5/messages:send",
      message,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Push notification sent!");
    console.log(response.data);
  } catch (error) {
    console.error("Failed to send notification:");
    console.error(error.response?.data || error.message);
  }
}

const targetFCMToken = "ds-aLA5-T2WaSXR-aZ4-cX:APA91bFU08Jxb9r1-g9zQv8KE71_Z3olYVHmE2EH7qXn_Xc1-oijDCp8Veh5on5MAABIwA8vzHtvQV-L8arOGhVkZwy6J4_E17XiCc-ls58kNtrIgHgFTMQ";
sendPushNotification(targetFCMToken);
