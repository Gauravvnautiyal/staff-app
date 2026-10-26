// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAToyimnkF4geUn_2VXcHmbnQQoD8c5znM",
  authDomain: "login-cred-c9bc0.firebaseapp.com",
  projectId: "login-cred-c9bc0",
  storageBucket: "login-cred-c9bc0.firebasestorage.app",
  messagingSenderId: "365144163704",
  appId: "1:365144163704:web:5e6534840aa1bf085c748d",
  measurementId: "G-XXVCF6M1W4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
})
export const auth = getAuth();

export async function signinWithgoogle() {
  return await signInWithPopup(auth, provider)
}

export async function creatinguserwithsignup(email, password) {

  if (!email || !password)
    return;
  return await createUserWithEmailAndPassword(auth, email, password)

}

export async function signinuser(email, password) {

  if (!email || !password)
    return;
  return await signInWithEmailAndPassword(auth, email, password)

}

export const db = getFirestore();
export async function creataUserdocfromauth(userAuth, addtionalInfo = {}) {
  const userDocRef = doc(db, 'AI-X1', userAuth.uid)
  console.log(userDocRef)
  const usersnapshot = await getDoc(userDocRef)
  console.log("usersnap", usersnapshot)
  console.log(usersnapshot.exists())
  if (!usersnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInfo
      })
    }
    catch (error) {
      console.log("error in creating ", error.message);
    }
  }
}
export async function addcollectionanddocuments(collectionkey, objectstoadd) {

  const collectionRef = collection(db, collectionkey);
  const batch = writeBatch(db)
  objectstoadd.forEach((object) => {
    const docRef = doc(collectionRef, object.key);
    batch.set(docRef, object)


  })
  await batch.commit();
  console.log("transaction is succesful")
}


