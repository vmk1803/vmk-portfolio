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
  @media (min-width: 0px) and (max-width: 600px) {
    display: block;
    & #image img {
      width: 400px;
      height: 300px;
      display: block;
      margin: auto;
    }
    & #action_content {
      margin: auto;
      width: 400px;
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
            src="https://lh3.googleusercontent.com/fife/AAWUweUj2K22mmMH65Mz1vmPIWgvNhpykHIxw9Tq-QbJYyzQ_nlYhTp8pUJkCYOzk9zc6aU4Icj7wh3upg6McpcIas5ffotpj8dJMPLFbnIcJBEmys8_Ymc5K5QEMrK1ruD-sJRhA_492lo6njd8acEC3sxyfL8W6fyaw3n3AffaeZ5OJtQHBJ8veDiQZ623wNXBhS2gdVR7cAHb2sO7ZLe66tExrMlQIla4VL1cjfs8rV0IdocMkrSowzGms37IatQIF5hTpRmR6xD9HW1UfLiB1lmgadS5pHN9AOSd-w269WHbV6lRhFckW_Gbnx6IyBom2ajHawkV4e0zxVf1lShh5j-96imhPl98WlCvOJZswDLzwYoo_9dgskw-F2BIB6YQMJbb9nmUzIkhPV2vmFQUviXcNAmdm6vSKjb8ioz_4rIrR_0Eik60JjRo5wqbJFREAJLIdRxm5pa4jRDT79Fm_jf7xHzeVTew6GpBeUWBq6W4Kvzynr1RAV_YWnjke97jjlKj4YEBn-BZsWE7n-4ep9ZQ3uPemHJqa0oJ7yM-YIDCHHTuQk5ts20FpFBLjLvX_zw5phH4rwAW1-KJiEmvjrmXIaqLVk1_psCfbJNGvcPAtCOdHzQR5tt8cq7MX-tBgd3-7tFdR58NTDPlDN4KcU4vPrrnrzySTh6KQ030bVOVU4J4d2Pk5_0LAFnF0_2FCQ5pNtXPKcc7SsmEYgY1nakN15VaSKRZnJo2LvjnAsqtb1cjn6xTL23jWov99SX-i9PVcsHuGTXhNBDEhOFbxoynWSgd2KBcAfxug_wEZ2P4lNN61-VXQptT_zyPFQexDezhyNx3bqCVG01ieM6hSZPH3s5YbSLfp5Zg8pbbxwBmmd9mETkbuwDlN_tV16cCZ74pAByjB0Vwpw7QyF7nwUNMbx72DUN1OyhJSVFYWFqJUSjx4qnB35JByOcbAryJ0fy95SNJwdyMuCwz645fHBShi8DtbALiB2nmnt1NBlDF-oLxeJ14YKwRcAlIlqQICbDZuorCUuzfrryL7Jo33Kp-h2vxwngEmZfJF9LtSBLUiGwGzBdBdcOvQSeyxqATEwLeroqdZQ2iHI3_7TIiTj-o2m1WBUIS-v7RC6GBZFqC-FXXnvEYPLml9kGKAE1pIe3uPyuW3E_MJ4cUYmksvMJ7b3-UE80SaLa2o2gsMb4T2jq7huLqa5QfCryL00ZU8ONcj6A2FCkHa6MYSwxBT7Sj0deRjVjYmPwAuijzxS6qC6k2Y-eoFBl2_izl1tLRPYAJxpcBtevoNwVgpR1dtJ5an5SZbNe5I_uBuEFZEW5-ytGUlN2gR-KsZS14_bOLHXfLV6PGDc5-q2t9kWkfdnRvI8CrQfFDugEHtcDL4YP8wQiPOcDtwzfioxdyQAYnNExZn5NHoX4Puem-RbxDTrn_WOgIU49jp9Ir8YJ4jGSZF9yjynndVEX8K8ecNc1J99nUx9iUfnGjQyi33UH6Cgs1wWth9GEn-hCYLUPhr2RUoJBjh25WdlajiISVrAvoJ9h0Uh3JfvLjjUostdm3Q60Q1f4eYAgtrpmWjoAM1zbzY7I7ZhBCfa-AlHvh_aiGGJDLXluBeYJu2v-vJInNjidu4p0ATP4AeAs268Uu84m8gJpA3ONzD9IVY2nDME-cBQWnociyS9rMxA1bTGujHUWPyMdHoZU03gctFAiVpPNtx7CFqjvA6E4pNVVx9eL7z5b8tV9JozU1ye-SnvZtAvOldQx6cAcP10p74wy_-kucUsoYL2PmvIB-e4Is7WEuZmsrvIzP9oa5ETzwzidpS0ZgaTECPe3YyPSbsB3UaLDbVhbpycL-V6zUf_98oHH_b8KAUVcqGCKfplJXDcOOrbwfjPeSbRYQ_IgA3L-ECDaPc3umzG39nATq3YndLqeAN5P1iUBOfXqvzY9DHLoITUsd9pteEu8DH766wWNUTjdZpakHsNHqdBFytYq6RZ5zTSn3dBF6cR074hSbpTMbVLZr9reibajdHr96TmuXK9ZKGE5ywhRKhUTxOoy29x4SIP7M9QX2YtVVDEWiTqzxAfwcuylpWAlcOJknT12wqCiIJu20_1NUgChiI-H46UQV3S6dqsahLSlqpHwYU4Nml7dgtY_SAsU1zp3Inkl5QDm3CNdLTlo_0g4MQ4160vjOBlXOM3gX5EgdMS9DzTUa4ok3q7GH4fX3oecnWiJe4_JOPlYr4ylqewpHFwvy9jEBHt_wf1_0cnbVNeRE3UEWzcW-5rgN_s5uFjDt7RGbdK_3STVlgZjPf5QzhVmDxk3X8XWbYcQglt4WeC7elu2rFI2j0W8007P6RPHiVN6eIWugPy-qHhu7yDoB744yZ3zC5SDRm_VwjRiCUe3HrlNL2v2tpKK9TT_oUvpUWodIkKnBHibv7xZJ-N3Mo08v-CN8ifzZDFg3azpCBp7i1bXjewBpwzC3COiyeN_eJmwTdvKzDXSFF3UET5cTIjqKl7AAlN2CYULlWVmh9xBB4Hv3RSAezbIG1fbkSzFPdEV0tA_RuLqysf7g3BTWsCQZ2iJBvVtqVh5N59AkhhK31U0EwkK7v5hbPp5nB9rlkhYkWg9QK7zArGwuMXGKi2DH4-npO1bEEv67m93uiHOx69A6VaaxrZGb6xgJtYIn3a7F8nv6GNqKoupv7Aa6vUPyoFSgXkiwUygG3PpgAHue1DZ4GCWKK8-FDMRfrl_l7dWq1lgDlnNKMTp6t1Hnl79yHP2wAbSW6qe2Vq8iN7IhaWyU6WdZN15Xdt069U8ul9jfVSlBhCFhgjZx8GgAW1-2gRd8szjFebFCFWEDdgdGvjqhXbC8tkTPJWf6Rs81cY4CsNQrN3utl-t3sPvI3g1eYXomGO32ACUzaqSPuqtFLO-XnDfqDaF_qKYssnYX2-Db-t-ZNTkH3-OMUKx_okuLm5S9kl_l__r8Bjwa-DVdwrIToBClBfC4mWMNtkEIX4J-_rw1Y-JilM2nu_Ss4I9aIPpfhE5d7gDIAFiN44g_8VTwAr4_rxUTRgfeIL909tvf9HIPuue1gCHir3ROVqEbwk7NBANPdzAxMHIGTxri5fhY3pYNdtpjowCvMSDq4F04J0X6NSYUaOzE3PtU81x-EdsCZlCCTetv-SprG1rCTdnKmPuM6hKWkLmdQ-hrp8iYHS82dLc9EjQekx60X3G91dUtnKNBCSWXCUHOTeKsnSAWOgrapxl29BjmiiiVjTds9mtLlH1_RLSh23AVi_239ZHxMVcPkkOHLD66ckOri7EFdpZn6pO-bWh9tz_TBFNlddHzJhFfgxk1-DnFzligy2emwoa4mt5K3RfbyHn-8r909AIQvAzjaHv3xHdG6c9htKybT4niQkkdaxe5YRttX1F4t2wrIa1OxlHheWf-5VPiu9y4JoKUiPEUWUOB8_jcya7vc8VcVS6F4h6Hpxh52Qs6hS7-XEp3G-NWYn1rJLUSEsxsN6Sm5SWnQZSugrbksInNXZRCLwq0dbrpj5MgB_Trtt6P0ogarr-BnB4PvLKriJ3eNJNPqz7dTtlCSRkHPqxc8_KRHTgEZyl8AyA8oUK-rmeFmgkDTqykW-D48E3RXVJbF8NJYscdm0WpVnm7ItGWmt8K-oAUv4VWyacn86t5q5THR__I1vgNYxWwejB0QJhGYRfzGSnRfwPyf2HscvOf4MIEjpEGHdc55tUx9grX6NO4ijI1Sz-rFj-BuMfKlHqhwryNZ1eCUw=s978-w804-h978-no?authuser=0"
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
