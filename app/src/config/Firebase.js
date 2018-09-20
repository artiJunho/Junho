import * as firebase from "firebase";

class Firebase {

    /**
     * Initializes Firebase
     */
    static initialize() {
        firebase.initializeApp({
            apiKey: "AIzaSyCdDCV-9af4cRqC5-zjBUmpRyiYkG5jWf0",
            authDomain: "junhobe-5133a.firebaseapp.com",
            databaseURL: "https://junhobe-5133a.firebaseio.com",
            storageBucket: "junhobe-5133a.appspot.com"
        });
    }

}

module.exports = Firebase;
