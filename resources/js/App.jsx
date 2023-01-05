import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { CometChat } from "@cometchat-pro/chat";
import "../css/App.css";

import Welcome from "./Pages/Welcome";
import { createContext } from "react";

const cometSettings = new CometChat.AppSettingsBuilder()
  .subscribePresenceForAllUsers()
  .setRegion("REGION")
  .build();
CometChat.init(import.meta.env.VITE_COMETCHAT_APP_ID, cometSettings).then(
  () => {
    console.log("Initialisation completed successfully.");
  },
  (error) => {
    console.log("Initialisation failed with error:", error);
  }
);

// const LockContext = createContext(true);
// const LockProvider = LockContext.Provider;

const accountObj = JSON.parse(localStorage.getItem("os_account"));
const userObj = JSON.parse(localStorage.getItem("os_user"));
const tokenObj = JSON.parse(localStorage.getItem("os_token"));

const AccountContext = createContext({
  account: {},
  user: {},
  token: {},
});
const AccountProvider = AccountContext.Provider;

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
    </Routes>
  );
};

const WrApped = () => {
  return (
    <HashRouter>
      <HelmetProvider>
        <AccountProvider
          value={{
            account: {},
            user: {},
            token: {},
          }}
        >
          <App />
        </AccountProvider>
      </HelmetProvider>
    </HashRouter>
  );
};

export { App, WrApped };
