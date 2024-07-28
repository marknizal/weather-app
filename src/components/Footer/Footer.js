import styled from "styled-components";

const Wrapper = styled.div`
  padding: 28px 0;
  background-color: #002948;
  text-align: center;
  color: white;

  p {
    margin: 0;
    font-size: small;
  }
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>Created by: Mark John Allen Nizal</p>
    </Wrapper>
  );
};

export default Footer;
