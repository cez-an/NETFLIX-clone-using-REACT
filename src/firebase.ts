import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING,
  appId: import.meta.env.VITE_FIREBASE_APPID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);

export const signup = async (name: string, email: string, password: string) => {
  try {
    const res = await createUserWithEmailAndPassword(auth,email,password)
    const user = res.user;
    await addDoc(collection(db,'users'),{
      uid:user.uid,
      name,
      authProvider:'local',
      email,
    })
  } catch (error) {
    console.log(error)
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
};

export const login = async (email:string,password:string)=>{
  try {
   await signInWithEmailAndPassword(auth,email,password);
   
  } catch (error) {
    console.log(error);
    toast.error(error.code.split('/')[1].split('-').join(' '));
  }
}

export const logout = ()=>{
  signOut(auth);
   toast(`Logged out Successfully`)
}