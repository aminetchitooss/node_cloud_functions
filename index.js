const functions = require('firebase-functions');
const admin = require("firebase-admin");
const serviceAccount = require("./config.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`
});
const db = admin.firestore()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    // db.collection('test').doc("123").set({name:"test"})
    response.send("Hello from Firebase!");
});
