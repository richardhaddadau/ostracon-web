import React from "react";
import { Ostracon, Settings } from "./icons/Ostracon-Std";
import { Settings as SettingsActive } from "./icons/Ostracon-Active";

const TopNav = (props) => {
    return (
        <nav className="flex flex-row items-center justify-between w-full h-14 bg-primary-500 dark:bg-black">
            <a className="cursor-pointer flex items-center justify-center w-16 min-h-full fill-white">
                <Ostracon size={30} color="white" />
            </a>
            <div
                className="cursor-pointer flex items-center justify-center w-16 min-h-full fill-white transition-all duration-300"
                onClick={() => {
                    props.mainScreen === "settings"
                        ? props.changePage(null, false, true)
                        : props.changePage("settings", true);
                }}
            >
                {props.mainScreen === "settings" ? (
                    <SettingsActive
                        size={20}
                        style="fill-primary-300 hover:fill-primary-500 translate-all duration-500"
                    />
                ) : (
                    <Settings
                        size={20}
                        style="fill-primary-300 hover:fill-primary-500 translate-all duration-500"
                    />
                )}
            </div>
        </nav>
    );
};

export default TopNav;
