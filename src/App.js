import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import "./components/login Pages/style.css";

import ForgetPassword from "./components/login Pages/forgetPass";
import SignUp from "./components/login Pages/signUp";
import Protect from "./components/login Pages/Protect";
import Main from "./components/main Pages/main";
import FirstLogo from "./components/firstLogoInsta";
// import Profile from "./components/main Pages/account/profile/profile";

import Home from "./components/main Pages/home/home";
import DirectInbox from "./components/main Pages/directs/inbox";
import Settings from "./components/main Pages/account/setting/settings";
import Profile from "./components/main Pages/account/profile/profile";
import SavedProfile from "./components/main Pages/account/profile/saved/saved";
import ProfilePosts from "./components/main Pages/account/profile/posts/posts";
import TaggedProfile from "./components/main Pages/account/profile/tagged/tagged";
import EditProfile from "./components/main Pages/account/setting/Settings/editProfile";
import ProfessionalAccount from "./components/main Pages/account/setting/Settings/professionalAccount";
import ChangePassword from "./components/main Pages/account/setting/Settings/changePassword";
import AppsAndWebsites from "./components/main Pages/account/setting/Settings/appsAndWebsites";
import EmailNotifications from "./components/main Pages/account/setting/Settings/emailNotifications";
import PushNotifications from "./components/main Pages/account/setting/Settings/pushNotifications";
import ManageContacts from "./components/main Pages/account/setting/Settings/manageContacts";
import PrivacyAndSecurity from "./components/main Pages/account/setting/Settings/privacyAndSecurity";
import LoginActivity from "./components/main Pages/account/setting/Settings/loginActivity";
import EmailsFromInstagram from "./components/main Pages/account/setting/Settings/emailsFromInstagram";
import Help from "./components/main Pages/account/setting/Settings/help";
import MessagesBox from "./components/main Pages/directs/messages/messages";
import MessagesGeneral from "./components/main Pages/directs/messages/messagesGeneral";
import Direct from "./components/main Pages/directs/direct/direct";

import { connect } from "react-redux";
import UnDefined from "./components/undefined";

const App = (props) => {
  const [Logo, setLogo] = useState(true);

  setTimeout(() => {
    setLogo(false);
  }, 1000);

  return Logo ? (
    <FirstLogo />
  ) : (
    <Routes>
      <Route path="/" element={<Protect />}>
        <Route path="direct" element={<DirectInbox />}>
          <Route path="inbox" element={<MessagesBox />} />
          <Route path="inbox/general" element={<MessagesGeneral />} />
          <Route
            path="bot"
            element={
              <Direct
                data={{
                  profile: "/imgs/profile/bot.jpeg",
                  name: "bot 🤖",
                  username: "Bot",
                }}
              />
            }
          />
        </Route>
        <Route path="account" element={<Settings />}>
          <Route path="edit" element={<EditProfile />} />
          <Route
            path="professional_account-settings"
            element={<ProfessionalAccount />}
          />
          <Route path="password/change" element={<ChangePassword />} />
          <Route path="manage_access" element={<AppsAndWebsites />} />
          <Route path="emails/settings" element={<EmailNotifications />} />
          <Route path="push/web/settings" element={<PushNotifications />} />
          <Route path="contacts_history" element={<ManageContacts />} />
          <Route path="privacy_and_security" element={<PrivacyAndSecurity />} />
          <Route path="session/login_activity" element={<LoginActivity />} />
          <Route path="emails/emails_send" element={<EmailsFromInstagram />} />
          <Route path="settings/help" element={<Help />} />
        </Route>
        <Route path={props.Account.username} element={<Profile />}>
          <Route path="" element={<ProfilePosts data={{ Posts: [] }} />} />
          <Route path="saved" element={<SavedProfile />} />
          <Route path="tagged" element={<TaggedProfile />} />
          <Route
            path="followers"
            element={<ProfilePosts data={{ Posts: [] }} />}
          />
          <Route
            path="following"
            element={<ProfilePosts data={{ Posts: [] }} />}
          />
          <Route
            path="hashtag_following"
            element={<ProfilePosts data={{ Posts: [] }} />}
          />
        </Route>
      </Route>
      <Route path="/accounts/create" element={<SignUp />} />
      <Route path="/accounts/password/reset" element={<ForgetPassword />} />
      <Route path="*" element={<UnDefined />} />
    </Routes>
    // <Main />
  );
};

const mapStateToProps = (state) => ({
  Account: state.Information.Account,
});

export default connect(mapStateToProps)(App);
