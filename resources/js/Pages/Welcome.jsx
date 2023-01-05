import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import SideNav from "../Components/SideNav";

import {
  Bell,
  Bookmark,
  Message,
  Flame,
  Globe,
  Home,
  Ostracon,
  Settings,
} from "../Components/icons/Ostracon-Std";
import TopNav from "../Components/TopNav";
import {
  Bell as BellActive,
  Bookmark as BookmarkActive,
  Flame as FlameActive,
  Globe as GlobeActive,
  Message as MessageActive,
  Home as HomeActive,
  Settings as SettingsActive,
} from "../Components/icons/Ostracon-Active";
import FeedScreen from "./PageComponents/FeedScreen";
import SettingsScreen from "./PageComponents/SettingsScreen";
import OPlusScreen from "./PageComponents/OPlusScreen";
import ChaptersScreen from "./PageComponents/ChaptersScreen";
import TrendingScreen from "./PageComponents/TrendingScreen";
import GlobalScreen from "./PageComponents/GlobalScreen";
import MessagesScreen from "./PageComponents/MessagesScreen.jsx";

export default function Welcome(props) {
  //States
  const [currentPage, setCurrentPage] = useState("home");
  const [mainScreen, setMainScreen] = useState("home");

  const changePage = (
    screen = null,
    rememberPrevious = false,
    recallPrevious = false
  ) => {
    const previousPage = localStorage.getItem("rememberPage")
      ? localStorage.getItem("rememberPage")
      : currentPage;

    setMainScreen(recallPrevious ? previousPage : screen);

    if (!rememberPrevious) {
      setCurrentPage(screen);
    } else {
      localStorage.setItem("rememberPage", currentPage);
    }
  };

  const pages = {
    home: {
      title: "Home",
      icon: <Home size={20} style="fill-primary-300 hover:fill-primary-500" />,
      iconActive: (
        <HomeActive
          size={20}
          style="fill-primary-500 translate-all duration-500"
        />
      ),
      component: <FeedScreen />,
      sideNav: true,
    },
    chat: {
      title: "Chat",
      icon: (
        <Message size={20} style="fill-primary-300 hover:fill-primary-500" />
      ),
      iconActive: (
        <MessageActive
          size={20}
          style="fill-primary-500 translate-all duration-500"
        />
      ),
      component: <MessagesScreen />,
      sideNav: true,
    },

    notifications: {
      title: "Notifications",
      icon: <Bell size={20} style="fill-primary-300 hover:fill-primary-500" />,
      iconActive: (
        <BellActive
          size={20}
          style="fill-primary-500 translate-all duration-500"
        />
      ),
      component: <MessagesScreen />,
      sideNav: true,
    },
    global: {
      title: "Global",
      icon: (
        <Globe
          size={20}
          style="fill-primary-300 hover:fill-primary-500 translate-all duration-500"
        />
      ),
      iconActive: (
        <GlobeActive
          size={20}
          style="fill-primary-500 translate-all duration-500"
        />
      ),
      component: <GlobalScreen />,
      sideNav: true,
    },
    trending: {
      title: "Trending",
      icon: (
        <Flame
          size={20}
          style="fill-primary-300 hover:fill-primary-500 translate-all duration-500"
        />
      ),
      iconActive: (
        <FlameActive
          size={20}
          style="fill-primary-500 translate-all duration-500"
        />
      ),
      component: <TrendingScreen />,
      sideNav: true,
    },
    chapters: {
      title: "Chapters",
      icon: <Bookmark size={20} />,
      iconActive: (
        <BookmarkActive
          size={20}
          style="fill-primary-500 translate-all duration-500"
        />
      ),
      component: <ChaptersScreen />,
      sideNav: true,
    },
    ostraconPlus: {
      title: "Ostracon Plus",
      icon: (
        <Ostracon
          size={24}
          style="fill-secondary-400 hover:fill-secondary-500 translate-all duration-500"
        />
      ),
      iconActive: (
        <Ostracon
          size={24}
          style="fill-secondary-500 translate-all duration-500"
        />
      ),
      component: <OPlusScreen />,
      sideNav: true,
    },
    settings: {
      title: "Settings",
      icon: (
        <Settings
          size={24}
          style="fill-secondary-400 hover:fill-secondary-500 translate-all duration-500"
        />
      ),
      iconActive: (
        <Settings
          size={24}
          style="fill-secondary-500 translate-all duration-500"
        />
      ),
      component: <SettingsScreen />,
      sideNav: false,
    },
  };

  return (
    <>
      <Helmet>
        <title>Ostracon</title>
      </Helmet>

      <div className="relative flex flex-col min-h-fit h-screen overflow-hidden">
        <TopNav mainScreen={mainScreen} changePage={changePage} />
        <div className="grow relative flex flex-row bg-base-light dark:bg-base-dark h-1">
          <SideNav
            links={pages}
            mainScreen={mainScreen}
            changePage={changePage}
          />

          {pages[mainScreen].component}
        </div>
      </div>
    </>
  );
}
