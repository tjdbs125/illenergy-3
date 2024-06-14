const questions = [
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 1,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},  //true들어간게 정답임
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi2PEPvqSLshlvhA7VcmTNJCov3SgnB3oBCH4EOSmc7R2nMIUMChlxmu6fm-_Fq0zBoS6vct9NjXfUGlcnsSXieu362mHH-IwS1dpU98UneYRnSSvudOCt-2UoVcPoEFtpSqMOzpeTFoXIIw2yuBtNMI9_2IvsAFeMAxk0CUXZYT2Ggw60UEoJUUPRZEEwr/s320/KakaoTalk_20240531_152458499_16.jpg", //문제 이미지니까 여기만 바꿔
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKb2sE4pN0dA2-CMIWiJBGiGdY819Y1egDzyvaYWbQc6beX_Y3LvzzhsIkAGBbgq1ZNWQDWgF7T4rFUVTLacCyTQkxBEQE-XaqcN21LgA_-dce_7rbrMOtY72JGz6PPJ7u75d4CmZSpGHILiI6YaM9t3S6n3-Y1s2hJ9-2OsUwksr88nSdWQT-FQiYZa5f/s320/KakaoTalk_20240614_005237369.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 2,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiTPiRN2YFI2fB8B5h9rkElSXEXeMILa_z-GE0FF5p00HMSCw7NBkJ4Duqh896AKNcDmvg1qd4Dxl4BKRn80FhZg2ulFM4NppWW3FY0T5bHB3sQU_IpNdDbi8OVmggL_Je9AT_Nriciqm0xysyk8jA0SjSXVSkzFL5dMxM3IuzY0kPdp0FmYrWG8k8DmQ09/s320/KakaoTalk_20240531_152458499_17.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjM6KIXcBHdnZLMgLqkulbtgvLhUuGHp83t03VgcYDkYIYISkDfOpDC39pOhKuDcqvKqsnDUvwaK4V24YWR521vAwj8NfsgSwTLlFEcnnOQngZ_7oypJlSpm53zI_kWp7nuRLILwmg5Cu6vdwAJ1obXYoIeTOIr8riEzFiNVsHqUeSrHeTxgzHiCZ5VEpkq/s320/KakaoTalk_20240614_005237369_01.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 3,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg2NnErCXWUbxD-6nkAKfuDvv7YMQM26O_J0C8QYkaoYeKuKJOC86-NYlw3HRV8bonGENV-m5YFBu8AszQnjXJYPC3y7hgbZ_gFs8pUb1V1iV0wqSBcrja_lQ2TVtvP-Fs_aKxEBd2-VXyXQBwyDSKj5pq5cSmMyhCa4xlzu7e3vvPff573wduvJK0LDdK3/s320/KakaoTalk_20240531_152458499_18.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiKTt-ojxcRwCdfIzjEvlAGNMAGt7uF1jKgn3d4lhyphenhyphenaVmV1fc1fuR_7mGsdsqLL93VTvVXcrW6no7oXk_8fgNTOAa_8L7_pheQmGdgbOcKN8_gi53pR2UEWX7OD_3z2XhdlyHqqJYYSTzURVxtAK3bU2GBGmj2qR-A1bb0_NOjpyL9ghHiRVYotMWN4Ma19/s320/KakaoTalk_20240614_005237369_02.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 4,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjraCXNw1xm6rnT__OSOiGBa9-nHn-coGnUprXtcv4iJ4LBgSEnQcJfUmMDd-jewA_R56wg6MENgZQ96JGWJc9RuCXb3Dj4ok9VVa3FXFuUOx7jtEQY3d_A-X-VtOZChKH5APqLCk5QYl1ifntmCqtpPXqmKyvUI5hP6sx2BXP27rpkU8GKrI9UCADC4TE3/s320/KakaoTalk_20240531_152458499_19.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjf1QlCd1EgnXoFbi_n1E3cdxt1JxqHRoCOD2b3Xoy_Gc5svxyzKRtnt5P-K6KJz5tZK4uDWHlrJa_V3Nh4NVSknk3g_hWAZjIkuAY-1NqTUU-HKssTrVDT85SlKwjxWUivbfdbdKmMPj9DCy1B0oe-R5cFklbMvRvbmZoHuPhS-EuVWsGh2ueEfcXkcw7h/s320/KakaoTalk_20240614_005237369_03.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 5,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjMlmfZe0cHWfsXraLKQxqkyFpeuhmCgzpM-g-JrN4fhBE9SUyruZLkGH8I0DMKxHtLXSdNFPRa-P0F9k2j5hWSsQJanXFnWHkH90_1chhtXQe24I6pwVBfXyDwnkv73wmMgKTXHGQIE_YxW8-XcWLUAbOcNx5ayXiwR1u0iI0Y96WSAvPruczkkziTHF-M/s320/KakaoTalk_20240531_152458499_20.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5zL8Dvt0gxL0tV3O6xZvmXyOWqRFi7oFStxRpGtT5yiq5QjtWHWyjCyOCnQ7LiFW5UEKIvED7bJ1Y2X3n7OHhdL0suCcYib0ui9zFFSsT6ZidqBhJNQJlxa1l77q2K81DfTfduHPUjhtq8CnFAnXRPBx4oH97-A2cLSbEz3-9gCmE-Z4x8wgh9uD_LVvJ/s320/KakaoTalk_20240614_005237369_04.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 6,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh9mcJiRefupjRE2VJ841_Hr-BTBch1zjOIbcvGDI_XEQ1KjoNqdKYSI2AVwQUrU-yObn1uNy7axaWHVqzhlFYS0AWDEvwPiRrfQnktHBzls2ywLxJuXq7HfjsvjqpTcXSE2RB_SJgRPgKtdpA07mSdV-UgVA7qaIymOCljkqa2rY0JC6RRxV80gYzNQPwx/s320/KakaoTalk_20240531_152458499_21.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhkasxjC1FhxwOE9cI2qQmD-8kYhxaMtZSPO83QuuVpqgLQ_UpVSmxURpF6kZqgKFBKzrKBYLi9pB32uB8xn0_66OrxrYXh1-rfPaSa9tWDwSC-dK1Cu1SV0oUY8o2HC92IZH1pPrh2SGNfxsNbqGvH3z1uJDg7TthCLN0EWDWzJSdvb3PHnSM5vTLqy2BX/s320/KakaoTalk_20240614_005237369_05.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 7,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTnDsVKHhmgNjVkt5G_t1P2cPSyjYR4e9GFWr-qQtE2-1SYVCpcve5kuxULRBzawsU0tFl82mW7WZYinnsZFDO1RKriz4NO0aEkESk9QcODi6GojlkSp-ivrGAJlNrGEPRaCrdLUf4BdG3018BXM477x9DymTK6cdeFYAs0VPhitm-eHrSoLXkD2sriWqo/s320/KakaoTalk_20240531_152458499_22.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhoDVE2OaNh20G1NgSGlWPJHXXzewGIpprBhpuMtrqq6TEQ4DwsV_cVh4eD1q_1jNJCCPsF6J0MGrkkcLbgvj64tsirhgKvDEQTueJIG9JvlhqE73c4Jlu7RDik6fWCp8XnV9nXlx6yOk7xwUjN0zBhTWZpQDOCHu6BaQZ3EfjEb15kpeJjDejv3vxZq-Zf/s320/KakaoTalk_20240614_005237369_06.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 8,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi5KHOeVHbqdPYuJwZBLTiss1-06TrFVos4dKa9LbzSUUpcSb4QpYMAiNvFq3BfIq51LVM2M4sVwtebt3pK8rtCdPzblwA8BJrc9XgLLu0J0bNEnBb4WKUfKgK81rHBe3MDVaexmC1E2NNVyIJgk4Q-TqAXyZD7cC12D5iHTqaz2rAPk9bAE6ga2UJjg8gg/s320/KakaoTalk_20240531_152458499_23.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiAGA1OcS8JS9epuJoPYb0LzH7yQmQisu0oPCkzRJe5yaXJ_DLoOtElK6Rge109BQKiy5EVjAge3xVeYKujo2LIOe36uloDPoaPdRBcbfeNCt9WDgvPILGaD0Erfdj7V3m2LHREmPVgmjgA9UXTXY2FinUHLTp_BwSKPdd8yPZKBswtUapQ_j8YmeNLbrMs/s320/KakaoTalk_20240614_005237369_07.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 9,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivk7eAQdU4M3CNq4BjxEWIy4IkBzuNum9AGeDu5gyiwoeIjx52cR-7kJGxcr9gqyoPcytbVLHO183PQ2ELC8Z6Nixd13h_eUcSqiOryGh0lVx9rStHCsmtUMH2Wh4B5fgrG0W78dJohHuROPy5DRqnqdD2IZ9sij7p-A_5QxINr4Vn0RbRZ6WvaO4Nqclf/s320/KakaoTalk_20240531_152458499_24.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiDsG9HOy_lAV47UKeqxMXyqQZc7Km1G_Uw7ofCQZhB-kvdrzB2bhMf9A0JyB9dzQTu3JUZJgsim2CR0iZZw2skPKRqpaCS-GrRVxHdtUhjphEIQJL1WJVsC0X1_BvVcqk8A77F0ejomi1gbToPSlJImwK7DFaMq0jghNIMoZqoAwxEWvtpmE2ZPKIYYhyr/s320/KakaoTalk_20240614_005237369_08.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 10,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijOFcXMD-cMqaON4_B8OdgrKp2uEaS-y6xup8gQ29RxdL3S4eTNISFukToOKmrr_DtC8TW1NQSox40E84Os_1UL0EooiOPcM7Fz1yivoniDyIxhBbSA1egaggtFKP8REV0GUr8xF5zZQqJwO17jQuBXEOfo-RA6ihqIcidP9h53ttZVBGc9ymab29flLKH/s320/KakaoTalk_20240531_152458499_25.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbjTaLkfKBM5AqrzGfis8_7IDBU3d3RvTfZeiL4OBygoHukPnsFmFdvEKhy7j8TRFhR3Zjt7SDBaBL7Jo7vl_HWpmLQJIHooRq2EplkBcrLIDdlRhafp62XFNPpzXCMgdjQ1MtgRogvBrPDsouP0GL7_fmUTMbCGhDon0yFj_KVwm_EBIl1k_CNNx2DbAd/s320/KakaoTalk_20240614_005237369_09.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 11,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: true},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhb-8z2ZmbQ-NW4BSErTxePd0N6OUS-LsvOFu-O0mvIp3NzsJHuIAilFRnC84Xt7vVMB7F1PuW6qxQFNICU3FE0b4qP1bP650UNPhmuPHkzqt4aDb4C5h1sfi6hErhW930qJSH907gIjDM4h7wdLI1sINfPZFBcX4P-KEK9PnrYgHwuYfLQNqT34Hbq5c_4/s320/KakaoTalk_20240531_152458499_26.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTUYVb6TpT3ZKZ-9UeK6fTajNC201zrRn_rOWwZ1nR-EM-bznRl_xrJTGk7yENx-rENUkQwoi-VvbQcqyr8hYXkg-v69kcJwpqGpvVOUxKEIqGR56PnfwDrln9ZMONcd8KY79URWktybyWSz-AJUgTG33U-kvC4JfM5mnAcq-KE22ib33zFNaxEuev7WL-/s320/KakaoTalk_20240614_005237369_10.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 12,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz8b6P33tS8ofiy0HRG-_Ey9Dlpbwye5VjJEMZVGpItVCWIiHdVRdHpFBnWwdXZNEyi_sTM69i31qT3qAFy56_gfbZ1kjthWsIhXEtVmGhobl1p0A4rtCY2_YxA5AeWc086mUUIwYqHzHcAUASalToOvc9oj1tSxLtqXQqNecMUL-dMCymoFGn-sZffWcb/s320/KakaoTalk_20240531_152458499_27.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjWfBG1ERXTALjDTZzvfHHQkoM7b7ARV25nr5P-2cUxIRxribniRm1eeoHZASwTjROPrG_zCOw9rnWWaNzP6KvZh_7xeHUSZfExdcRhP4iIn7N-VbHcrQY8uH0192ArRVvpFsZRXVHmkdR03HO2L78GGd_xRp6odlHkBcf3Fb_fY7a4YYkI9GIV0x7QK8Zy/s320/KakaoTalk_20240614_005237369_11.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 13,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: true},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1tQXmA6vpPUIbKYjOzAaQBBm4bzzrCqBGibcNexoWphBkxB76Q6Anqj70j4vGRVia_HBgjD3om2lzaDq8F6pP6s8FDF4N5ZgN5VlpJpM2H7NNbcYuD5-7EaRGZmtSGbiEIxAhC6jiERmwXxHI29TuL1jY6Ea1HDmZS3cpSRzZZ2_giVA2VSPrGIqU2JGU/s320/KakaoTalk_20240531_152458499_28.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEijPEPWp8V4UrQN1oMCCN8vs3TE2l0-Psdn5OKP1BIZJqfSlCsYyavF6E7p1G0A27zSEtMRFLEhQ4xC6IPvhq-i0rV9X4KRSRwNGN5_PKy3Y220scMBWCYSnLj2_wag_HI3Gj24ThMM40B2KRod4I3MFnArrF_SDtTirdQf2vk6kLjg29S4lBNC-jd6lLJb/s320/KakaoTalk_20240614_005237369_12.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 14,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: true},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg0Ipm5LNe-DdsKpmvzrD69Xf4xIrici6fgvguKFs1tfdgS5KjytfbwERJ5DNcc9MAo8IcqSqpGs0thukaUnlC90aEhfgCnD_CooofX6Tw5xuZkqcF43w110kwLtkDvr8_lj_B5rm7z5wGtoHkRrIjl7510nJ-vHVAbJ0S57Ih-8i8BqotzYSuZmfmquI4F/s320/KakaoTalk_20240531_152458499_29.jpg",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhk0A0sxf_n1kGiClBTupmXnEgUwpI9Ce1dz2ljbilJDv-6eq6hemFy3WomraYFRqUGN8-3mlCjYmgFgpBBq7furobqE1P6wX57cyOu4KG4Wk6L_cOkyfoHywX3uT1ZL-vBBl3b-UR41Sr5ploXHTPwElNS5KTvrXAqOl_gGvE-97dDK9odPbPshr0_KWe4/s320/KakaoTalk_20240614_005237369_13.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 15,
        answers: [
            { text: "1", correct: true},
            { text: "2", correct: false},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjzjW7T6veqWqcUHEo-dMBqqS2iiN-8N08GjaNZRho9TZsr2OehpWEEP2m5jztJNmcqMXOj_6GYaRXVfaeOcWwUpn7c96tm7QR3mH1Ga51rAPLgt_nBvXbMTpoqSCcTZg_krlO9PrzA3t9SLlsnNDvmfC3PmKtvxSbIkEvurfKPvWiPmklIm7oH__tPZeJw/s320/111.PNG",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbB0gtXppa-sUpjRw8_vDLXPYIVfMUTLMq5zawBo9J-eZmCqf-sFOkE3RVOknqQE97RHMhSrajv6CDkEfHGkxFlX4xBDsZQSZBa9ZJE2kts3NFTQtj3pfIeiE65ZxkGkCs9BYuWWRGz4yCcAu9KP9SanQmWoMyIssyBiWdry0MDBekT6oJmG_QI3zlenqA/s320/KakaoTalk_20240614_005237369_14.png",
        selectedAnswer: null
    },
    {
        question: "다음 문제에 대한 알맞은 답을 고르시오",
        questionnumber : 16,
        answers: [
            { text: "1", correct: false},
            { text: "2", correct: true},
            { text: "3", correct: false},
            { text: "4", correct: false},
            { text: "5", correct: false},
        ],
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjNepSz9GrT9aWNUlN8GsFAb55QrCe6hQqrxt4iv4YzUX0hEh9hdmTuCemAfw7u-m5IhrCIenLKu7MO0aT7K-R4ZyxMQ-y-79kJzbylafUXrdsUGPIySRd0KGBWUNX5YNJTDLEwB0S_ErkDtmCicFCy_IT-AwGa4RylENDmvHo3lEUfFkzP7TyyhhW0hynW/s320/1111.PNG",
        explanationImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGkyEaXIfGVsjksDRy9BDj3PYY3OHZO-2wQ1QQ1QXtoCMD-fwnf2o2m8dmmAXaXLlpKtrDu2K3E2zFLer7fgGemPRSM1p6qcZdpiFWkVe0xywo41cCJ8mBjNfb_x5u_HXBHibqgP6E-_4_-Pz5kHtW_ij2rcEsE_Zsf1ZJ40zbtUO-m9j2xRJxSYbxHEM3/s320/KakaoTalk_20240614_005237369_15.png   ",
        selectedAnswer: null
    }
];

const imageContainer = document.getElementById("image-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    
    if (confirm("답을 선택하시겠습니까? \n(한번 고른 답은 바꿀 수 없습니다)")) {
    // 현재 질문에 사용자가 선택한 답 기록
    questions[currentQuestionIndex].selectedAnswer = selectedBtn.innerHTML;

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
}

function showScore() {
    resetState();
    questionElement.innerHTML = `${questions.length} 문제 중 ${score} 문제를 맞추셨습니다.`;

    const incorrectQuestions = questions.filter(q => {
        const correctAnswer = q.answers.find(a => a.correct).text;
        return q.selectedAnswer !== null && q.selectedAnswer !== correctAnswer;
    });
    
    const noteElement = document.querySelector(".note");
    if (noteElement) {
        noteElement.style.display = "none";
    }

    if (incorrectQuestions.length > 0) {
        const incorrectList = document.createElement("ul");
        let headerAdded = false;  // '틀린 문제' 헤더가 추가되었는지 확인하는 변수

        incorrectQuestions.forEach((q, index) => {
            const listItem = document.createElement("li");
            listItem.classList.add("incorrect-question"); // 클래스 추가

            if (!headerAdded) {
                const incorrectHeader = document.createElement("p");
                incorrectHeader.classList.add("incorrect-header"); // 클래스 추가
                incorrectHeader.innerHTML = "틀린 문제";
                questionElement.appendChild(incorrectHeader);
                headerAdded = true;  // 헤더가 추가되었음을 표시
            }

            listItem.innerHTML = `
                ${q.questionnumber}. ${q.question} <br> 
                <span class="answer-text">당신의 답: ${q.selectedAnswer}</span> <br> 
                <span class="answer-text">정답: ${q.answers.find(a => a.correct).text}</span>
            `;
            incorrectList.appendChild(listItem);
        });
        questionElement.appendChild(incorrectList);
    } else {
        questionElement.innerHTML += "<br> 모든 문제를 맞추셨습니다!";
    }

    nextButton.innerHTML = "다시 풀기";
    nextButton.style.display = "block";

    // 해설 보기 버튼 추가
    const explanationButton = document.createElement("button");
    explanationButton.innerHTML = "해설 보기";
    explanationButton.style.display = "block";
    explanationButton.style.marginTop = "20px";
    explanationButton.addEventListener("click", showExplanationButtons);
    questionElement.appendChild(explanationButton);
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        showImage();
    }else{
        showScore();
        imageContainer.innerHTML = "";
    }
}

function showImage(){
    const currentQuestion = questions[currentQuestionIndex];
    const imagePath = currentQuestion.image;

    if (imagePath) {
        const imageElement = document.createElement("img");
        imageElement.src = imagePath;
        imageElement.alt = "Question Image";
        imageContainer.innerHTML = "";
        imageContainer.appendChild(imageElement);
    }else{
        imageContainer.innerHTML = "";
    }
}
showImage();

function showExplanationButtons() {
    // 이미 해설 버튼들이 생성되었는지 확인
    let explanationContainer = document.getElementById("explanation-container");
    if (!explanationContainer) {
        explanationContainer = document.createElement("div");
        explanationContainer.id = "explanation-container";
        explanationContainer.classList.add("explanation-container")


        questions.forEach((question, index) => {
            const button = document.createElement("button");
            button.innerHTML = `${index + 1}번 문제 해설`;
            button.classList.add("btn", "explanation-btn"); // 스타일 추가
            if (question.selectedAnswer === question.answers.find(a => a.correct).text) {
                button.classList.add("correct");
            } else {
                button.classList.add("incorrect");
            }
            button.addEventListener("click", () => showExplanationImage(index));
            explanationContainer.appendChild(button);
        });

        questionElement.appendChild(explanationContainer);
    }
}

function showExplanationImage(index) {
    const currentQuestion = questions[index];
    const questionImage = currentQuestion.image;
    const explanationImage = currentQuestion.explanationImage;

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image-wrapper");

    if (questionImage) {
        const questionImgElement = document.createElement("img");
        questionImgElement.src = questionImage;
        questionImgElement.alt = `Question Image for Question ${index + 1}`;
        questionImgElement.classList.add("question-image");
        imageWrapper.appendChild(questionImgElement);
    }
    
    if (explanationImage) {
        const explanationImgElement = document.createElement("img");
        explanationImgElement.src = explanationImage;
        explanationImgElement.alt = `Explanation Image for Question ${index + 1}`;
        explanationImgElement.classList.add("explanation-image");
        imageWrapper.appendChild(explanationImgElement);
    }

    imageContainer.innerHTML = "";  // 기존 이미지 제거
    imageContainer.appendChild(imageWrapper);
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
        showImage();
    }
});


startQuiz();
