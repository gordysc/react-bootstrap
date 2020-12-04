import "firebase/auth";
import firebase from "firebase/app";

if (firebase.apps.length < 1) {
  firebase.initializeApp(/* Add configuration here */);
}

export default firebase;
