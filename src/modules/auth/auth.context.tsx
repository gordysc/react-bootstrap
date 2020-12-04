import React, { createContext, useState } from "react";

import firebase from "src/lib/firebase";

export const AuthContext = createContext<string | null>(null);

export const UID_TOKEN = "uid-token";

export const AuthProvider: React.FC = ({ children }) => {
  const initialState = localStorage.getItem(UID_TOKEN);
  const [uid, setUID] = useState<string | null>(initialState);

  firebase.auth().onAuthStateChanged(user => {
    setUID(user?.uid as string | null);

    !!user?.uid ? localStorage.setItem(UID_TOKEN, user.uid) : localStorage.clear();
  });

  return <AuthContext.Provider value={uid}>{children}</AuthContext.Provider>;
};
