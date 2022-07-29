import styled from "styled-components";

export const InstragramWrapper = styled.div`
display: flex;
align-items: center;
justify-content: center;
height: 120vh;

.divMain {
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;

export const InstagramPhone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;


  .imgphone {
    height: 50rem;
  }
`;


export const Group = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  background-color: #ffffff;
  width: 140%;
  padding: 1.3rem 0;
  border: 1px solid lightgray;


  .instagram-continue {
    display: flex;
    align-items: center; /* horizontal */
    justify-content: space-around; /* vertical */
    flex-direction: column;
    width: 50%;
    min-height: 15rem;
  }

  .perfilImg {
    height: 5rem;
    border-radius: 50px;
  }
  .profile-photo {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
  }
  .instagram-logout {
    color: #0095f6;
    margin-top: 1rem;
    text-decoration: none;
  }

  .instagram-login {
    background-color: #0095f6;
    color: #ffffff;
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
  }
  .not-account {
    color: rgb(160, 160, 160);
  }

  .link-blue {
    color: #0095f6;
  }
`;


export const GetApp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 1.3rem 0;

  .download {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
  }
  .app-download:nth-child(1) {
    width: 9rem;
  }

  .app-download:nth-child(2) {
    width: 9rem;
  }
`;
