importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/4.4.0/firebase-messaging.js');

var config = {
  apiKey: "",
  authDomain: "todolist-ab.firebaseapp.com",
  databaseURL: "https://todolist-ab.firebaseio.com",
  projectId: "todolist-ab",
  storageBucket: "todolist-ab.appspot.com",
  messagingSenderId: ""
};
firebase.initializeApp(config);

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(function(payload) {
 const title = 'ToDo List';
 const options = {
  body: payload.data.body
 };
 return self.registration.showNotification(title, options);
});
