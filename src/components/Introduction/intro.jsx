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
            src="https://i.pinimg.com/564x/7e/43/f1/7e43f10053fd1443cf41bf240e7e0225.jpg"
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
