import * as React from "react";
// import Button from "@mui/material/Button";
// import { AccountPageContainer } from "../components/account/AccountBlock";
import { SpacesheepMainTitle } from "../components/common/Title";
import { ReactComponent as Logo } from "../asset/spacesheep_logo.svg";
import { ButtonForAccount } from "../components/common/Button";
import Block from "../components/common/Block";
import { AccountContentBlock } from "../components/account/AccountBlock";
import { SpacesheepLogo } from "../components/common/Logo";

const FirstPage = () => {
  return (
    <AccountContentBlock>
      <SpacesheepMainTitle>spacesheep</SpacesheepMainTitle>
      <Block size="60"></Block>
      <SpacesheepLogo />
      <Block size="175"></Block>
      <ButtonForAccount primary="true">sign in</ButtonForAccount>
      <Block size="30"></Block>
      <ButtonForAccount>create account</ButtonForAccount>
      <div className="socialLogin">{/*social login button section*/}</div>
    </AccountContentBlock>
  );
};

export default FirstPage;
