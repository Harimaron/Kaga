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
      <Image src="https://i.imgur.com/xleSd8z.jpg" />
      <Title>
        Hi, I'm <Grey>Gaëtan Ribonnet</Grey>,
      </Title>
      <Text>
        <Animate>Front-End Developer</Animate>, currently studying at BeCode.org
      </Text>
      <Text>— Brussels, Belgium —</Text>
      <Links>
        <Link name="twitter" url="https://www.twitter.com" />
        <Link name="linkedin" url="https://www.linkedin.com" />
        <Link name="github" url="https://www.github.com" />
        <Link name="codepen" url="https://www.github.com" />
        <Link name="dribbble" url="https://www.github.com" />
      </Links>
    </Content>
  </Wrapper>
);

export default Home;
