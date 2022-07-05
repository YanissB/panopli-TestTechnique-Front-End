import React from "react";
import { Toggle } from "@welcome-ui/toggle";
import { Field } from "@welcome-ui/field";
import { Box } from "@welcome-ui/box";

const SideMenu = () => {
  const [checked, setChecked] = React.useState(false);

  const handleToggle = () => {
    setChecked(!checked);
  };
  return (
    <Box
      display="flex"
      w="20%"
      flex-direction="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor="success.200"
    >
      <Field label="Available">
        <Toggle checked={checked} onClick={handleToggle} disabled />
      </Field>
    </Box>
  );
};

export default SideMenu;
