import styled from "styled-components";

const AboutDiv = styled.div`
  display: flex;
  margin-top: 50px;
  max-width: 1100px;
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
`;

export const Intro = () => {
  return (
    <section className="section">
      <h2 className="section__title">About Me</h2>
      <AboutDiv>
        <div id="image">
          <img src="https://vmk1803.netlify.app/images/vmk.jpg" alt="" />
        </div>
        <div id="action_content">
          <p>
            Hello there, I am Software Developer with intuitive problem-solving
            skills and having specialization in MERN stack. I have a serious
            passion to build responsive websites. Enthusiastic to learn new
            technologies, self-motivated, self-learner. Look forward to joining
            a company where I will be able to contribute towards individual and
            company growth.
          </p>
        </div>
      </AboutDiv>
    </section>
  );
};
