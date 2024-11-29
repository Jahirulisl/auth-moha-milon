import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firbase.init';

export const AuthContext = createContext(null);

//value ta nam dabr jonno amra akta nam nilam


const AuthProvider = ({children}) => {
    const name ='potato alu mia';

      //useEffect set objarber stet set krtbo part 2 start>

     const [user,steUser] = useState(null);


      //useEffect set objarber state set krtbo part 2 end>

   //password based account stp 1 start>
 const createUser = (email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password)
 }
//password based account stp 1 end>


 //sign in user with an email address and password step 1 start >
  const signInUser =(email,password) =>{
    return signInWithEmailAndPassword(auth,email,password)
  }

 // setting an observer on the Auth object start from fire base>
  useEffect(()=>{
 const unSubscribe = onAuthStateChanged(auth,currentUser =>{
        console.log('current User',currentUser);
        steUser(currentUser);
    })

   return ()=>{
    unSubscribe();
   }

  },[])

  // setting an observer on the Auth object start from fire base>

     //sign in user with an email address and password step 1 end >

     //useEffect set objarber set krtbo part 1 start>
    //  onAuthStateChanged(auth,currentUser =>{
    //     if(currentUser){
    //         console.log('current logged user',currentUser);
    //          // set from stat
    //         steUser(currentUser)
           
            
           
    //     }
    //     else{
    //         console.log('no user logged in');
    //          // set from stat
    //        steUser(null)
    //         // set from stat
    //     }
    //  })

    //  //useEffect set objarber set kotbo part 1 end>




    const authInfo ={
        name,
        user,

           //password based account stp 2 start>
           createUser,
          //password based account stp 2 end  now access register>>>

           //sign in user with an email address and password step 2 start >
          signInUser,
           //sign in user with an email address and password step 1 end >
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