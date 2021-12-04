import styled from "styled-components"

export const Maindiv = styled.div`
  background-color: #aa9090;
`

export const Aboutdiv = styled.div`
  background-color: #0f0000;
  padding-bottom: 15vh;
  padding-top: 15vh;
  .abouthead {
    font-family: "Poppins";
  }
  .abouttxt {
    font-family: "NotoSans";
    font-style: normal;
    line-height: 1.7rem;
    letter-spacing: 0.02rem;
    font-size: 1.2rem;
    color: #e9c1c1;
  }
  h1 {
    color: #fff8f8;
  }
`
export const Prizesdiv = styled.div`
  background-color: #0f0000;
  padding-bottom: 15vh;
  padding-top: 15vh;
  .prize-head {
    font-family: "Poppins";
    color: #fff8f8;
    text-align: center;
  }
`

export const Organiserdiv = styled.div`
  background-color: #0f0000;
  padding-bottom: 15vh;

  h1 {
    margin-top: 10vh;
    color: #fff8f8;
    font-family: "Poppins";
    font-size: 2.5rem;
    font-weight: bold;
  }
  .container {
    max-width: 1500px;
  }
`

export const Organizercarddiv = styled.div`
  width: 120px;
  height: 120px;
  margin: 4vh;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  padding: 2px;
  img {
    display: flex;
    justify-self: center;
    align-self: center;
    border-radius: 5px;
    min-height: 90%;
    min-width: 90%;
    width: 90%;
    height: 90%;
  }
  .social {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 5px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background-color: rgba(15, 0, 0, 0.5);
    display: none;
  }

  :hover {
    transition: all 1s;
    .social {
      display: flex;
    }
  }
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`
export const Sponsordiv = styled.div`
  background-color: #0f0000;
  padding-bottom: 15vh;
  padding-top: 15vh;
  h1 {
    margin-top: 10vh;
    color: #fff8f8;
    font-family: "Poppins";
    font-size: 2.5rem;
    font-weight: bold;
  }
  .container {
    max-width: 1500px;
  }
`

export const Sponsorcarddiv = styled.div`
  margin: 4vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 20px;

  padding: 20px;
  transition: background-color 0.5s ease;
  ${props => {
    if (props.type === "gold") {
      return ` width:300px;height:225px; @media(max-width:425px){height:225px;}`
    } else if (props.type === "silver") {
      return ` width:250px;height:188px`
    } else if (props.type === "community") {
      return ` width:300px;height:225px`
    } else {
      return `width:200px;height:150px`
    }
  }};

  max-width: 90%;
  a {
    width: 100%;
    height: 100%;
    display: grid;
    img {
      display: flex;
      justify-self: center;
      align-self: center;
      max-height: ${props =>
        props.type === "gold" || props.type === "silver" ? `100px` : `80px`};
    }
  }
  :hover {
    /* transition: all 0.5s ease; */
    background-color: #581c0c;
  }

  @media (max-width: 600px) {
    margin: 1vh;
    height: 125px;
    width: 125px;
  }
`

// export const PrizeSection = styled.div`
//   padding-left: 30px;
//   font-family: Noto Sans;
//   font-style: normal;
//   font-weight: normal;
//   font-size: 20px;
//   line-height: 1.5;
//   /* or 23px */

//   text-align: justify;

//   .title {
//     font-family: Poppins;
//     font-style: normal;
//     font-weight: 300;
//     font-size: 2.5rem;
//     line-height: 60px;
//   }
// `

export const PrizeSec = styled.div`
  background-color: #0f0000;
  display: flex;
  justify-content: space-around;
  align-items: center;
  min-height: 60vh;

  .col-md-6 {
    padding: 4%;
    min-height: 40vh;

    h1 {
      color: ${props => props.color};
    }
    .prize-detail {
      color: #fff;
      font-size: 1rem;
    }
  }
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const SponserHead = styled.p`
  text-align: center;
  font-size: 2.5rem;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  color: ${props => props.color};
  margin: 25px;
`
export const Hackslash = styled.div`
  color: white;
  text-align: left;
  margin-top: 75px;
  max-width: 750px;

  div {
    justify-content: center;
  }
  .main-img {
    width: 100%;
    height: 100%;
  }
`

export const FaqWrapper = styled.div`
  background: #260404;
  border-radius: 25px;
  position: relative;
  color: #fff;
  font-family: "NotoSans";
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 33px;
  padding: 15px 5px 15px 32px;
  .expand {
    position: absolute;
    right: 15px;
  }

  @media (max-width: 550px) {
    font-size: 0.8rem;
    .expand img {
      height: 20px;
      width: 20px;
    }
  }

  @media (max-width: 440px) {
    font-size: 0.67rem;
    .expand img {
      height: 20px;
      width: 20px;
    }
  }
`
export const FaqSection = styled.section`
  background: #0f0000;
  padding: 10vh 0;
  .faqrow {
    text-align: center;

    h1 {
      color: #fff8f8;
      font-family: "Poppins";
      font-size: 2.5rem;
      margin-bottom: 5vh;
      font-weight: bold;
      text-align: center;
    }
    margin-left: 5vw;
  }
`

export const FaqSolutionWrapper = styled.div`
  color: floralwhite;
  background-color: rgba(255, 16, 16, 0.4);
  font-family: "Poppins";
  font-style: normal;
  font-weight: 300;
  font-size: 1rem;
  border-radius: 25px;
  margin: 20px 0;
  padding: 20px 30px;
  line-height: 40px;
  text-align: left;

  @media (max-width: 550px) {
    font-size: 0.8rem;
  }

  @media (max-width: 440px) {
    font-size: 0.67rem;
  }
`
export const FooterDiv = styled.div`
  background-color: #260404 !important;
  font-family: "Poppins";
  padding-left: 2vw;
  padding-top: 6vh;
  padding-bottom: 4vh;
  color: #ffffff;

  .first {
    padding-right: 3vw;
    p {
      font-size: 0.9rem;
    }
  }
  .second {
    padding-left: 5vw;
    border-left: 2px solid rgba(255, 255, 255, 0.4);
    /* margin-: 0; */
    height: 400px;
    h6 {
      color: #2286e0;
    }
  }
  .third {
    display: flex;
    align-items: center;
    ${"" /* justify-content: center; */}
    flex-direction: column;
    text-align: center;
    h5 {
      color: #2286e0;
    }
  }

  .before {
    height: 9vh;
  }

  .after {
    height: 13vh;
  }

  .copyright {
    ${"" /* padding-right: 6.0vw; */}
    margin-top: 2vh;
    margin-bottom: -2vh;
  }
  .logo {
    padding: 10px;
    height: 5.5rem;
  }

  @media (max-width: 990px) {
    .second {
      /* padding-left: 4rem; */
    }
    .first {
      padding-right: 50px;
    }
    .copyright {
      padding-top: 5vh;
      text-align: center;
    }
    .third {
      padding-top: 8vh;
    }
  }

  @media (max-width: 990px) {
    .before,
    .after {
      height: 0;
    }
  }
  @media (max-width: 770px) {
    align-self: center;
    .first {
      text-align: center;
      padding: 0;
      margin: 0;
      padding-bottom: 50px;
      border-bottom: 2px solid white;
      width: 85%;
    }
    .second {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      margin: 50px 0;
      border-left: 0;
      align-items: center;
    }
  }

  /* background-color: #260404 !important; */
  /* padding-left: 50vw; */
`
