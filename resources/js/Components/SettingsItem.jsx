import React, { useEffect, useState } from "react";
import { Switch } from "@mui/material";
import ControlledSwitch from "./ControlledSwitch";

const SettingsItem = ({
    title = "New Setting",
    type = "text",
    options,
    extraStyles = "",
}) => {
    // States
    const [toggleChecked, setToggleChecked] = useState(true);

    useEffect(() => {
        type === "toggle" ? setToggleChecked(options) : null;
    }, []);

    const settingTypes = {
        text: (
            <div
                className={
                    "flex flex-row gap-1.5 text-sm font-bold text-primary-300 dark:text-gray-700 " +
                    extraStyles
                }
            >
                {options}
            </div>
        ),
        toggle: <ControlledSwitch />,
        input: (
            <input
                className={
                    "py-1 px-3 border-0 rounded-xl text-primary-500 font-bold " +
                    extraStyles
                }
                type={options}
            />
        ),
        pin: (
            <input
                className={
                    "py-1 px-3 border-0 rounded-xl w-24 text-primary-500 font-bold " +
                    extraStyles
                }
                type={"password"}
                maxLength={options}
            />
        ),
    };
    return (
        <>
            <div className="p-2 pb-4 flex flex-col md:flex-row items-center justify-between border-b-2 border-gray-300 text-left w-full max-w-2xl">
                <div className="font-bold text-primary-500 dark:text-white">
                    {title}
                </div>
                {settingTypes[type]}
            </div>
        </>
    );
};

export default SettingsItem;
