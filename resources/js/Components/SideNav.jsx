import React, { useState } from "react";
import Navigation from "./Navigation";
import { Moon, Sun } from "./icons/Ostracon-Std";

const SideNav = (props) => {
    //States
    const [darkMode, setDarkMode] = useState(localStorage.theme === "dark");

    const toggleDarkMode = () => {
        document.documentElement.classList.toggle("dark");

        localStorage.theme = document.documentElement.classList.contains("dark")
            ? "dark"
            : "light";

        setDarkMode(document.documentElement.classList.contains("dark"));
    };

    return (
        <nav className="flex flex-col justify-between w-16 min-h-full bg-white dark:bg-primary-500 shadow-lg">
            <Navigation
                links={props.links}
                mainScreen={props.mainScreen}
                changePage={props.changePage}
            />

            <div className="py-6 flex justify-center w-full">
                <a
                    className=" cursor-pointer p-3.5 rounded-lg hover:shadow-lg fill-primary-300 dark:bg-white dark:fill-secondary-300 hover:stroke-2 hover:fill-primary-500 dark:fill-secondary-500 hover:translate-x-0.5 hover:-translate-y-0.5 transition-all duration-300"
                    onClick={() => {
                        toggleDarkMode();
                    }}
                >
                    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
                </a>
            </div>
        </nav>
    );
};

export default SideNav;
