import { Box } from "@welcome-ui/box";
import { Text } from "@welcome-ui/text";
import React from "react";
import GithubIcon from "../assets/logo-github.png";
import LinkedinIcon from "../assets/linkedin.png";
import MailIcon from "../assets/email.png";

const Footer = () => {
  return (
    <Box>
      <Text variant="h2" marginLeft="1rem">
        Contacts
      </Text>
      <Box display="flex" justifyContent="space-around">
        <a href="https://github.com/YanissB">
          <img src={GithubIcon} alt="github logo" />
        </a>
        <a href="https://www.linkedin.com/in/yaniss-besson/">
          <img src={LinkedinIcon} alt="linkedin logo" />
        </a>
        <a href="mailto: yaniss.besson1@gmail.com">
          <img src={MailIcon} alt="mail icon" />
        </a>
      </Box>
    </Box>
  );
};

export default Footer;
