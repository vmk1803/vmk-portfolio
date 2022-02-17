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
    <section className="section">
      <h2 className="section__title">About Me</h2>
      <AboutDiv>
        <div id="image">
          <img
            src="https://lh3.googleusercontent.com/fife/AAWUweXiEMakg6yU4bhPFusjZLk_SsCj6bM10lVarSHRMAZ4z9M5ykKDJLc6eYx3gCeDBt3pjACKMDq31C64wS4Du_8xvLkMpbixi-bCjN6O2W6cNH70MohctC0SNlxsrwm-9Ehv3HWC54hOToVjiYC-8UAUpqfyKwbd2WwPCh1J1uBzuWVWMfRbQg_9q7vtRFrbnv8eLsHuu3iAjHCytb1dBV5KVZgSs14zKP2I-VNDwe_I5UCTIO8ewPx77ZmmAJGvHcOhXIt2jfQlVfpztepMZesiBX6_f4gA1hIs-ledwK3lw12bW_Xz16LVYJFoztPXYBXJZ3vciVzucglg9OQSBn-3H4MH0gQ6ZrQOF2_zy27-TZvUGcfzE59FVpLtX-aHLg9nkJ1vohLdxmRIuGyzqQfRHQAwGvq5Mcybct6Fe_iJJaXJ6-BnZ638D7aFblHtz_O8SZUYnu_-GjQqo4K4_Ed7p5DUt24NH9uIET46p124vart_YIV1hcf6D9RTf-1OVjMrKKIjbVOQEhecvZ7ipUCOaqEV-XRpacS6EJUXseZF0QTyV5iiyL_pKpjmpMTPwInuWRwizpYOBQQWPD0nfcO-nqSv3lrLpnB6jm5I6Pcy9wihpQjnLQCUCd_pMK7EumXmjyDTQo4CzSubHOAIVokYoxL21ARRvDm6VRBwxSw6gkvzA0tMI2UnfWpQ_VWcLmqbl62l3Km3ws_2mwOccu4M2bnrLcUpRO-U4N5Gt5pe82PN4M2_gTHmQ6xhmU5UpMaWHgg0hfqJ4ezVO_3jefThlx8JzjbdFyL8V3KjLUxnogFNWBylEJPrcpBcu9W_jvU0h2ScYwAzU_RDX3VZICjZtOFOSZx3ZUJBi7g2NqUYqR_7mFQ6kPzy1zwQKKjBClV1AnTsNVywxKngiqGly93FkL10VvlBIrAK3qAHU40jgjCz2pwffdK9BwCZFbfTvQmyjU94Sf814fahvUHIDLUdYPMhF0dp5njxqnHmtz_6MLrOAGj640O7tRSg9khxeqC7lhum610Zh2qOepz_IHVl5Gd2Zl0eBp2cXB-Y9L0OYK5HqjODPMHi903vAvH6GGepxb19d4k5YCiB4e86E-_Qy5mbcjnWr0e5w2X2McB74V_MhYM-C4T5GfWD8ec8oMQHfkUES9YpINsW-a8U_mWBVEBEhyp9dTGsabxJye6ozVLYPPG0KHhF8bzDKKAnscO09rd33XQExsNiAFul0nR3amzOJ3L2emYr24O6r2C3bYjnQgwoi01UXNAVah0O5utOaQFXbi7clHzkuWxwvPl1-gOsiBOapDud8O7OBLz-Lcx18JEQuydusA2Bybv3GijtryD2b4SEYgmQUaTD3jrFKt7phdWdFKbUJdE4loioJ7UX_S4GUuJ2Gs2YYzqxQDBvAcba2YsQ2_5FZgxLVeelgBs7xxBoq-_McL8dE67hcuQ-30jRNsLynISJAIPQf3WgPR74TgJx-WoTSifPJqeC2m8u3pN8agcc3y-Y3QGv1lPmDvHlYR_0HsQSH5wm-IttIDSzxY2FFFbGnIw7CJc9MXJBZkvZRWf5qv3Cv3m9DNBxSoLSmhQy7YYp9fwU2Xt3bpQD7QrXkitSA-x9_TCcU9tpH3sZN2CTgbWxo7QQE15-1tPvC6EjEXd_hqV8i_X5k8-P2B6LeUr8RX5iTBuzFvA-IEWhKkngIC_kavbsy8I298obbLbNXiGZab0saL7P_nV8yKVHX76amd2ZpOZG1ZHiM4fewsVrdCWJ5_voqNtz5Pl9RNU2JkSf-6icfC6Lryr4Fq-EysJZteq2a16ENqwoA44Iufs7lPZ3V2JAVEyCKp_Bm_WCazpmE-CkfL2IbPME_JpwHyCgmpfdxHbSJOdb9z4m80kdP06gkoe-LdpBuRknxGHSCWvLVCvt8uvI_ReUAK9bSKSv-0bcwMzG8F_IYsdtWyVB8uqKl7kLOZ9jFBss1GCEUbs-T3t61qa6PG79M3V_4tUEK5ORrkfqe5Bqemtm69N9J7NbPdmSX5qrKGOladSY-8geGHqvTSwPFny-sw08HOgLg22KC_vCqAj11gstOmBNqWGG-4Lmtqc5Xp-dmKPmNJiXHJ8_xSS8ioHMkxXb8s_GsBi0o3o4RKNlvrd5opO3aE2ARTT_hHn6WXuInu9TEUPaplf7i8jga3ccRas1duygVQZvEysBIWTmz_hY0UG0a6VkjUzYmmJTkvz1uHsg9ub6GT0ILBz5ZGyYPENcyUqN_BM1SIDlICdb8wa7oo0UVKLEFIRvcNs2wpuYHAfd_kAs3870a6GemAuAwFytFT_UZBwqqt_Ign212z3S49CTMmuta5XYHEh_WTBfGWK_wmx3sxZhJInr-VUe4XoaPLxNPe-0lLvDEpop6DJqh7CZtcqIRTJJzyeybRGBy495nndNGdWuyeAalAYxKWVEt0nfg81AcA4qluMQyM7P4TnJl8H13-aEl8x0sdha_rT9ipV_iXk83yK2kYkHs_V5nfdt5BkSkWGyVNle8tvDwzYlluQgd38evA2Ep6Ov9I6LAeBZUad6sMDZIog6Zb2r_yNmTNaAlrimAcK1uU1YnGtp0BHM33tbW759lUooVQMMttQdrpfWDmyu7H7uA505oTaY-p63r1KmhiDxUCBf2l_miPhcLvI1fJ1LGQlfx7LNn5MvXYOai7LhHz0aREKLZWzC-YzupleQ8RoH4-PE8p3Qyz74jwEOuTMV8FaMksIjcUyMtc0Ot_Cvi1GF9Cl3e6iWMK3fr9z24ZtfYJacGr8ur2hm9jLtRQEJxoCExiIAfeX8RGMWIeh4GCDQtTPKrQ82yZCPFxZPUfzRHHAhV70MUlNTAssvl-8vkocr490SEOC4AGL2ybayEgxo_6iqi9k1bCAKFfsx6p03belTTD4dEVs_BVAzI-i29sbE6sFqcd9hWdUsk60CjKHb2oKWAvKq88Y21AzecebnNt1u5-KcRA0iOIA-nb8MTVCN4q73L_ME9k75sOsEweip74eVjzDFthC4MIRxSz3OQO1trscttwWzFL1aqoOCuJ046M_VOP6PuJmEUeVnbwUdrV7A_o0EiqNK4wBjGTRfzUzdcbt2uNgifhwX_44EHaLq6z1BIfLQgmN1i7hYAxPEV_3UwT8bwIceF8g7AfUMYkQdbjwy13LVvkEomI7uZ01fIBgFL-O6qyYaKbC58mVFAogrVLt3wq6zorK3jzCat60G4QnXBHzpcK0blPzien_37Uv_jH3a1effhQiLIZRZ0u4Mb2_GU7neNyCymciahr8WQ90R0DAS_YuE5hECTILqtsg61nkenz82zHB5Rfn3Re3e5Q4K0xBl5GPDqkBmeR81WKKB7eZOJVvZiwAYZfK8clYJFzvnv-Wc3ytLC6Wh1MlHrwmKvshluvnweernB6IWMQrUE6QfU0_5MnAe8-rr6-r6HnRjwdQ3J_Se6xMIdamRkNdsb-lNAc89X4Ai_EwHiDP7iK0tIHN_V_kAItGezyrgRsSYfiPWEbVAHSxN-tyElJpmNtNbdPbKr7tHSu0qwE-uPJFGhn5Mb74MEAMeMjZhUrTw_i4MvzVzga9Iloa17cWjQGT6FCym4z9bXsq7ostUZK36-PA44bwaxf_KilAIr0hwwZMZyT2ZPCgI0PUAEO1B6V_GKtK6ogjYXAKttSrBCHA9Uqa_7qLYO0nDnUDotyl7pewqLtKyZwJL23JSAmb6tzZKd8gC-fVg58A_9CLxdLmGw=s978-w804-h978-no?authuser=0"
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
