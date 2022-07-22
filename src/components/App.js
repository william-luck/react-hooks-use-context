import React, { useContext, useState } from "react";
import Header from "./Header";
import Profile from "./Profile";
import { UserProvider } from '../context/user'
import { ThemeContext, ThemeProvider } from '../context/theme'

function App() {

  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <main className={theme}>
      {/* Need to wrap components that need access to context data in the provider. With this, we can remove the user props passed down.  */}
      <UserProvider>
        <Header />
        <Profile />
      </UserProvider>
    </main>
  );
}

export default App;
