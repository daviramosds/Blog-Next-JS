import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;

/* 
  .categories {
    display: flex;
    display: flex;
    justify-content: flex-end;
    font-weight: 400;

    span {
      margin-left: 35px;
    }

    span:hover {
      transition: 0.2s;
      cursor: pointer;
      color: ${(props) => props.theme.colors.main};
    }
  } */

  .title a {
    color: var(--background-color);
    text-decoration: none;
    transition: 0.2s;

    display: flex;

    font-weight: 500;
    color: #1d1d1d;
    font-size: 1.2rem;

    strong {
      color: ${(props) => props.theme.colors.main};
      font-weight: 500;
    }
  }

  @media screen and (max-width: 950px) {
    padding: 15px 20px;

    /* .categories {
      display: none;
    } */
  }
`;

export const Search = styled.div`
  height: 40px;

  :hover > .searchInput {
    width: 200px;
    padding: 0 12px;
    border-bottom: 1px solid #2f3640;
  }

  .hover-input {
    width: 200px !important;
    padding: 0 12px !important;
  }

  .hover-button {
    background: white !important;
    color: var(--main-color) !important;
  }

  .searchButton {
    color: #2f3640;
    float: right;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: none;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s;
    border: 0;
  }

  .searchInput {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: #2f3640;
    font-size: 16px;
    transition: 0.4s;
    line-height: 40px;
    width: 0px;
    /* display: none; */
  }

  .searchFilled {
    width: 200px;
    padding: 0 12px;
    border-bottom: 1px solid #2f3640;
  }


  @media screen and (max-width: 950px) {
      display: none;
  }
`;
