import React, { useState } from "react";
import { Switch } from "@mui/material";

const ControlledSwitch = () => {
    const [checked, setChecked] = useState(true);

    const handleChange = (e) => {
        setChecked(e.target.checked);
    };

    return (
        <Switch
            checked={checked}
            onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
        />
    );
};

export default ControlledSwitch;
