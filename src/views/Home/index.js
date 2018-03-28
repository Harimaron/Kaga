import React from "react";
import {
  Wrapper,
  Image,
  Title,
  Text,
  Links,
  Header,
  Content,
  Grey,
  Animate
} from "./styled";
import Link from "../../components/Link";

const Home = () => (
  <Wrapper>
    <Header />
    <Content>
      <Image src="https://i.imgur.com/9g8bRR5.png" />
      <Title>
        Hi, I'm <Grey>Gaëtan Ribonnet</Grey>,
      </Title>
      <Text>
        <Animate>Junior Developer</Animate>, currently studying at BeCode.org
      </Text>
      <Text>Brussels, Belgium</Text>
      <Links>
        <Link name="linkedin" url="https://www.linkedin.com/in/gribonnet/" />
        <Link name="github" url="https://github.com/Harimaron" />
        <Link name="envelope" url="mailto:gaetan.ribonnet@outlook.com" />
      </Links>
    </Content>
  </Wrapper>
);

export default Home;
