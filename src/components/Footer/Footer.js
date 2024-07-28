import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  padding: 18px;
  background-color: #002948;
  text-align: center;
  color: white;
`;

const Footer = () => {
  return <Wrapper>Created by: Mark John Allen Nizal</Wrapper>;
};

export default Footer;
