import firebase from "src/lib/firebase";
import { Credentials } from "./auth.interfaces";

const authService = {
  login: async ({ email, password }: Credentials): Promise<boolean> => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      return true;
    } catch (err) {
      // TODO: Add error reporting here...
      return false;
    }
  },

  logout: async (): Promise<void> => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      // TODO: Add error reproting here...
    }
  },

  sendPasswordResetEmail: async (email: string): Promise<void> => {
    try {
      await firebase.auth().sendPasswordResetEmail(email);
    } catch (err) {
      // TODO: Add error reproting here...
    }
  }
};

export default authService;
