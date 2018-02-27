import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  box-sizing: border-box;
  background-color: #262628;
`;

export const Title = styled.div`
  font-size: 2.5em;
  font-weight: 600;

  margin-top: 1em;
  margin-bottom: 0.3em;
  color: white;
  font-family: "PT Sans", sans-serif;
  line-height: 1em;
  text-align: center;
`;

export const Image = styled.img`
  margin-top: 7em;
  width: 150px;
  height: 150px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const Header = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  background-color: #181818;
  justify-content: space-between;
  flex-shrink: 0;
`;

export const Links = styled.div`
  margin-top: 2.3em;
  display: flex;
  align-items: flex-end;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Text = styled.div`
  color: white;
  font-family: "PT Sans", sans-serif;
  text-align: center;
  font-size: 1.6em;
  font-weight: 300;
  margin-bottom: 0.2em;
`;

export const Grey = styled.span`
  background-color: grey;
`;

export const Animate = styled.span`
  text-decoration: underline;
  }
`;
