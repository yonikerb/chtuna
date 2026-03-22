importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyDxvUkaKOBjvmOz0WRxSMXEobAsqmldrzg",
    projectId: "weddingcountdown-fe0ea",
    messagingSenderId: "884026968676",
    appId: "1:884026968676:web:c7d6324227126b616aad71"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
