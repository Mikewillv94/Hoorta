import styled from "styled-components";

export const StyledForm = styled.form`
  button {
    margin-top: 20px;
    width: 38vw;
    height: 88px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    text-align: center;
    margin-top: 10px;
  }

  textarea {
    width: 38vw;
    height: 45px;
    padding: 7px;
  }

  .addressContainer p:nth-child(1),
  .ccContainer p:nth-child(1) {
    margin-bottom: 10px;
  }
`;
