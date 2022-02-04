import styled from "styled-components";

export const Container = styled.article`
  transition: 0.2s;
  text-decoration: none;
  cursor: pointer;

  :hover {
    margin-top: -5px;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.15));
  }

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  width: 360px;
  height: 420px;

  background-color: gray;

  border-radius: 15px;

  margin: 30px;

  @media screen and (max-width: 420px) {
    width: 90vw;
    margin: 30px 0;
  }

  background-color: white;

  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.1));

  .banner {
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    background-image: url(${(props) => props.banner});
    width: 100%;
    height: 500px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    display: flex;
    justify-content: space-between;
    flex-direction: column;

    width: 100%;

    height: 100%;

    padding: 20px 20px;

    .author {
      color: ${(props) => props.theme.colors.main};
      font-size: 0.9rem;
      font-weight: 600;
    }

    h1 {
      font-size: 1.1rem;
      font-weight: 600;
      color: #333;
    }

    .info {
      display: flex;
      justify-content: space-between;
      font-weight: 400;
      color: #333;
      font-size: 0.9rem;
    }
  }
`;
