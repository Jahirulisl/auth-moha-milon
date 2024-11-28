import React, { createContext } from 'react';

export const AuthContext = createContext(null);

//value ta nam dabr jonno amra akta nam nilam
 const authInfo ={
    name:'Nodi sagor khal bill.....'
 }

const AuthProvider = ({children}) => {
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