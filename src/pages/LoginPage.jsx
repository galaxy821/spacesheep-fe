import * as React from "react";
import { motion } from "framer-motion";
// import { AccountPageContainer } from "../components/account/AccountBlock";
import Block from "../components/common/Block";
import { SpacesheepLogo } from "../components/common/Logo.jsx";
import { SpacesheepMainTitle } from "../components/common/Title";
import { InputForAccount } from "../components/common/Input";
import { ButtonForAccount } from "../components/common/Button";

const LoginPage = () => {
  return (
    <>
      <SpacesheepMainTitle>spacesheep</SpacesheepMainTitle>
      <Block size="60"></Block>
      <SpacesheepLogo></SpacesheepLogo>
      <Block size="50"></Block>
      <InputForAccount type="email"></InputForAccount>
      <Block size="10"></Block>
      <InputForAccount type="password"></InputForAccount>
      <Block size="30"></Block>
      <ButtonForAccount primary="true" buttonAnimated="true">
        sign in
      </ButtonForAccount>
      {/* </motion.div> */}
    </>
  );
};

export default LoginPage;
