import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firbase.init';


export const AuthContext = createContext(null);

 //value ta nam dabr jonno amra akta nam nilam

 //social looging 2 stp start
   const googleProvider = new  GoogleAuthProvider();
 //social login 2 stp start

const AuthProvider = ({children}) => {
    const name ='potato alu mia';

      //useEffect set objarber stet set krtbo part 2 start>

     const [user,steUser] = useState(null);

       //stop reload thamoner jonno stp 1 start>
     const [loading,setLoading]= useState(true);

      //stop reload thamoner jonno stp 1 end>


      //useEffect set objarber state set krtbo part 2 end>

   //password based account stp 1 start>
 const createUser = (email,password)=>{

  //stop loading page 3 step 
    setLoading(true);
  //stop loading page 2 step 
    return createUserWithEmailAndPassword(auth,email,password)
 }

 //signOut or LogOut start>
  const signOutUser =()=>{

     //stop loading page 3 step 
     setLoading(true);
     //stop loading page 2 step 

    return signOut(auth);
  }
 //signOut or LogOut end>

 //social login start
 const signInWithGoogle =() =>{
   return signInWithPopup(auth,googleProvider);
 }
 //social login end


//password based account stp 1 end>


 //sign in user with an email address and password step 1 start >
  const signInUser =(email,password) =>{

     //stop loading page 3 step 
     setLoading(true);
     //stop loading page 2 step 

    return signInWithEmailAndPassword(auth,email,password);
  }

 // setting an observer on the Auth object start from fire base>
  useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('current User',currentUser);
        steUser(currentUser);
        //stop loading page 2 step 
        setLoading(false);
        //stop loading page 2 step 
    })

   return ()=>{
    unSubscribe();
   }

  },[])

    const authInfo ={
        name,
        user,
        loading,
          //social login 3 stp start
          signInWithGoogle,
          //social login 3 stp end

           //password based account stp 2 start>
           createUser,
          //password based account stp 2 end  now access register>>>

           //sign in user with an email address and password step 2 start >
          signInUser,
           //sign in user with an email address and password step 1 end >

           //sing out sta 2
           signOutUser
            //sing out sta 2 
     }

    return (
        <AuthContext.Provider value={authInfo}>
           {/*main part will have access to this context */}
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

/***
 * 1.create context with null as default value
 * 2.create a provider 
 * 3.set a value with something (authInfo)
 * 4.[attention please !!!!]
 * 5.use the auth provider in the main.jsx.
 * 6.access the children inside the authProvider in the main .jsx
 * 7.export AuthContext
 */