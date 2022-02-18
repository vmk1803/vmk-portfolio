import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  margin-top: 50px;
  margin: 0 auto;

  & #image img {
    width: 400px;
    height: 450px;
    margin-right: 30px;
    border-radius: 20px;
  }
  & #action_content {
    display: flex;
    text-align: left;
    align-items: center;
    border: 1px;
    font-size: 20px;
  }
  @media (min-width: 0px) and (max-width: 650px) {
    display: block;
    & #image img {
      width: 300px;
      height: 300px;
      display: block;
      margin: auto;
    }
    & #action_content {
      margin: auto;
      width: 300px;
      margin-top: 20px;
    }
  }
`;

export const Intro = () => {
  return (
    <section className="section" id="aboutme">
      <h2 className="section__title">About Me</h2>
      <AboutDiv>
        <div id="image">
          <img
            src="https://lh3.googleusercontent.com/whwwSuTaMh69xiiZpuuoJ2ArSvesN_YB6ibkg7aIPcrNPLeH_Pm6hM7cuS-stYGkoL5-EZ25rHX_bibIOv8k_4y6d33RbepLwPotUE2sA0VivmnnOMmV5KTsfOlZW1vSlzYbDe1nRl-9zvi03MtIi-pnVbyLtgGF1S3JUeuk6vwMeXKS5eg2gpTD-mDSo123akvrLE_w9MMhvUfoEp0ZVlfTFwqJKDjRKaRM27WhVFeOtijNWM8WR3mDFl1BTsjKn90cXdxg6K-uORSHkSlFec7jJodCa1PyUQpKI2rAl63AO3_CpnT4qKcS5XuNOsrrjd6ix2tVn8g2bpFgF66Bufpa33_hOfHM4fEM3NVM-zHeMJBip6BIbLHA1lOdmyMYpkhoAPQQv8-2Wz83-r_dwtcjorhPFStHElpINhkayY9ztnZTJLuQkYwYfdHZazeOd-ABraTT08weT1dV_LRQb8iaH7MNw8ZHCxkrlrBZyQvLrbwmdfFiL2aPATqE602FCk5g3cimZRLP6_evFtqyjsQ5F6nBMqCO7NaZylVbhdYBIodZNOuxTTT-_ygvKk9svhJoqkpeZv9Sjh9qr1pqwD6r4tnCVUyjIoZtSuRpFgaxtuIii4QdO3itnqDxa3--EIDSm-25o3vZPcd3m5LJ6ciQvS98ZWyCdB7uIsoJrrc1W7SqCS-CH2UleHCWyqLyQKOeDI5r0436gASo4e6vhyU=w804-h978-no?authuser=0"
            alt=""
          />
        </div>
        <div id="action_content">
          <p>
            Hello there, I am Software Developer with intuitive problem-solving
            skills and having specialization in MERN stack. I have a serious
            passion to build responsive and creative websites. Enthusiastic to
            learn new technologies, and implement the knowledge in creating good
            projects. Look forward to joining a company where I will be able to
            contribute towards individual and company growth.
          </p>
        </div>
      </AboutDiv>
    </section>
  );
};
