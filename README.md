#  React Native Push Notification App

This project demonstrates how to build a basic React Native application that receives push notifications using **Firebase Cloud Messaging (FCM)** — even when the app is in the background or killed — similar to WhatsApp behavior.

---

##  Features

- Simple and clean welcome UI
- FCM token handling (secured on screen)
- Native Android push notification handling (Java)
- Background & killed-state notifications
- Manual token-based notification sending from backend/Postman

---

##  Tech Stack

- React Native
- Firebase Cloud Messaging (FCM)
- Java (for Android native module)
- Node.js (for token generation and notification testing)
- GitHub for version control

---

##  App UI Overview

1. Displays welcome message and what the app does.
2. FCM token is fetched in the background and hidden from UI.
3. Listens for incoming push notifications (background/foreground).
4. When a notification is sent, it shows as a native push (like WhatsApp).

---

##  Native Android Integration

- Created a native `FirebaseService.java` in `android/app/src/main/java/.../`
- Registered the service in `AndroidManifest.xml`:

```xml
<service
  android:name=".FirebaseService"
  android:exported="false">
  <intent-filter>
    <action android:name="com.google.firebase.MESSAGING_EVENT" />
  </intent-filter>
</service>
```

## FCM Setup
Firebase Console: Created project & added Android app.

google-services.json: Placed in android/app/.

FCM Token: Generated and fetched using @react-native-firebase/messaging.

--- 

## Sending Notification (Manual Testing)
Used service account JSON file from Firebase.

Node.js script (getToken.js) to generate OAuth access token.

Sent notification via curl or Postman:
```
POST https://fcm.googleapis.com/v1/projects/YOUR_PROJECT_ID/messages:send

Headers:
Authorization: Bearer YOUR_ACCESS_TOKEN
Content-Type: application/json

Body:
{
  "message": {
    "token": "DEVICE_FCM_TOKEN",
    "notification": {
      "title": "Hello",
      "body": "Test push message"
    }
  }
}

```
# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
