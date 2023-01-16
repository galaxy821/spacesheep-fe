import { AccountContentBlock } from "../components/account/AccountBlock";
import Block from "../components/common/Block";
import { ButtonForAccount } from "../components/common/Button";
import { InputForAccount } from "../components/common/Input";
import { SpacesheepLogo } from "../components/common/Logo";
import { SpacesheepMainTitle } from "../components/common/Title";

const SignupPage = () => {
  return (
    <AccountContentBlock>
      <SpacesheepMainTitle>spacesheep</SpacesheepMainTitle>
      <Block size="60"></Block>
      <SpacesheepLogo></SpacesheepLogo>
      <Block size="0"></Block>
      <InputForAccount type="email"></InputForAccount>
      <Block size="10"></Block>
      <InputForAccount type="password"></InputForAccount>
      <Block size="10"></Block>
      <InputForAccount type="password"></InputForAccount>
      <Block size="20"></Block>
      <ButtonForAccount primary="true">create account</ButtonForAccount>
    </AccountContentBlock>
  );
};

export default SignupPage;
