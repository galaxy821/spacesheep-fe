import * as React from "react";
import styled, { keyframes } from "styled-components";

const gradient = keyframes`
  /* from {
    background: linear-gradient(#7f7fd5, #86a8e7, #91eae4);
  }
  to {
    background: linear-gradient(#108dc7, #86a8e7, #ef8e38);
  } */
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const AccountBlock = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background: linear-gradient(-45deg, #b39d3d, #5f9ebd, #5872c2, #60488b);
  background-size: 600% 600%;
  animation: ${gradient} 20s ease-in-out infinite;
  overflow: hidden;
`;

// export const AccountBlock = () => {
// return <AccountBlockDiv animate={{background : linearGradient(#7f7fd5, #86a8e7, #91eae4)}}/>;
// };

export const AccountContentBlock = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 240px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const AccountPageContainer = ({ children }) => {
  return (
    <AccountBlock>
      <AccountContentBlock>{children}</AccountContentBlock>
      <ul class="background">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </AccountBlock>
  );
};
