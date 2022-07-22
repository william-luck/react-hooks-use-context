import React, { useState } from "react";

// Creates the context 
const UserContext = React.createContext()

// Create a provider component
function UserProvider({ children }) {

    

    const [user, setUser] = useState(null)

    // The value prop below will be the context data, which will be availabel to child components of this provider.... 
    return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider> 
}

export { UserContext, UserProvider}