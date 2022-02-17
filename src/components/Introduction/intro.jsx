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
          <img
            src="https://lh3.googleusercontent.com/qrLgVkPmvYgsgIE6APvvwi4VIPxXn3GWPETpOV1dxtaE1EvLXRk52KV9D5UZYNJ-m-JsUiDEoVp9qyGyrWtImPMU69pPhkRI0z7EZEzu2dVZl_tzD-YC0TqmaY_xrw0KVaIhJIHNVG6sJvJKaShKtZfUqccvwPFxNPQx4twAq0KTNM8nnaKUWJ2qOp63gT3xrE8CqKEZq5rKEFL5lCuAPq2QESEmyEdbXSSFStHX2534zl2C-WQUEqhHlsfANAP3w1sU-BhrHQT0p3WPU4tweJpS7Kk5yPED1FaM7mXOrpqrNGFwYWCo7QoufW_Os-i6IxNRD6KA3mBF4uApnbT3KoAI4wMK4JIF2l0aizrUhG4L1cr6V7-yGLMBwoF0sBU-NIMmN7p9LDEAtJev09HvkjKOwGkCACrLb9kAGMy8mBCJfRqZkRzjUyDavYejyeY9AbIHQvuQAKeXYWBPk09UV4bOi_5RpEuqg-_CoMbPCze2mMYVhFQsqfBIMPhW-3rQJ_eCBY6CkXQY_Cudk8egApakfAwth-ocviJX_5hivIK9QJKcuHWjRg61-ZozfLcOlQmjpPBKWIBcG0d23NnuBuDcQe6ipZDwdLsYx2KPsQqwbF1v0DhSOvFWr18zr-x7T2DBd-MMo7A9zl4bxBslCNr4HqdQ2BCA5IrnlzcLg7Npcm7TBNwRyvsRSkNJwiJ0ar0YC2JDEUFc8QOpflQxbU4=w804-h978-no?authuser=0"
            alt=""
          />
        </div>
        <div id="action_content">
          <p>
            Hello there, I am Software Developer with intuitive problem-solving
            skills and having specialization in MERN stack. I have a serious
            passion to build responsive websites. Enthusiastic to learn new
            technologies, and implement the knowledge in creating good projects.
            Look forward to joining a company where I will be able to contribute
            towards individual and company growth.
          </p>
        </div>
      </AboutDiv>
    </section>
  );
};
