import styled from "styled-components";

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  background: linear-gradient(
    83.79deg,
    #792a3e -13.79%,
    #160c0f 49.42%,
    #121134 110.05%
  );

  /* background-image: url($  {props => props.banner}); */
  height: 400px;

  color: white;

  h1 {
    font-size: 3rem;

    strong {
      color: ${(props) => props.theme.colors.main};
    }
  }
`;

export const Posts = styled.div`
  max-width: 1300px;
  margin: 10px auto;
  align-items: center;
  justify-content: center;

  display: flex;

  flex-wrap: wrap;
`;
