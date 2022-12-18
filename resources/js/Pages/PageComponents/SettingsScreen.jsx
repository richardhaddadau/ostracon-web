import React from "react";
import SettingsItem from "../../Components/SettingsItem";

const SettingsScreen = (props) => {
    return (
        <>
            <section className="py-6 px-4 flex flex-col items-center gap-4 grow overflow-y-auto">
                <h3 className="w-full max-w-2xl text-center md:text-left font-bold text-primary-500 dark:text-gray-500 uppercase">
                    Account Settings
                </h3>

                <SettingsItem
                    title="Change nickname"
                    type="text"
                    options="Archer"
                />

                <SettingsItem
                    title="Change handle"
                    type="text"
                    options="randy"
                />

                <SettingsItem
                    title="Change email address"
                    type="text"
                    options="sterling@archer.com"
                />

                <SettingsItem
                    title="Change password"
                    type="text"
                    options="*****"
                />

                <SettingsItem
                    title="Show date of birth"
                    type="toggle"
                    options={true}
                />

                <h3 className="w-full max-w-2xl text-center md:text-left font-bold text-primary-500 uppercase">
                    Privacy Settings
                </h3>

                <SettingsItem
                    title="Secure app with pin"
                    type={"pin"}
                    options={5}
                />

                <SettingsItem title="Make profile private" type="toggle" />

                <SettingsItem title="Allow sensitive material" type="toggle" />

                <SettingsItem title="Open direct messaging" type="toggle" />

                <SettingsItem title="Show date of birth" type="toggle" />

                <h3 className="w-full max-w-2xl text-center md:text-left font-bold text-primary-500 uppercase">
                    Account Settings
                </h3>

                <SettingsItem title="Show date of birth" type="toggle" />
            </section>
        </>
    );
};

export default SettingsScreen;
