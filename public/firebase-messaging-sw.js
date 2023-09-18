/*
Give the service worker access to Firebase Messaging.
Note that you can only use Firebase Messaging here, other Firebase libraries are not available in the service worker.
*/
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.23.0/firebase-messaging.js');

/*
Initialize the Firebase app in the service worker by passing in the messagingSenderId.
* New configuration for app@pulseservice.com
*/
firebase.initializeApp({
    apiKey: "AIzaSyAc_fj304ivoTqc_53KoyFXIIG4hlFlQD0",
    authDomain: "coursesland-push-notifications.firebaseapp.com",
    projectId: "coursesland-push-notifications",
    storageBucket: "coursesland-push-notifications.appspot.com",
    messagingSenderId: "104528221798",
    appId: "1:104528221798:web:213202926eccf511d43fa7",
    measurementId: "G-9DYDGNLS27"
});

/*
Retrieve an instance of Firebase Messaging so that it can handle background messages.
*/
const messaging = firebase.messaging();
