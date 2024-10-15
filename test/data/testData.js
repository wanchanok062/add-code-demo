// test-data-tc1-tc5.js
const testCases = [
    {
      id: 'TC_01',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "TG-UC",
            item_g4: "SP",
            ibrand_1: "FOCUS",
            color: "Gold",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G0AS101-APIP16-GD",
            code_component: {
              code_semi: "S0AS101-APIP16-GD",
              code_tempered_glass: "T0AS101-APIP16-GD",
              code_tempered_ab: "TABS101-APIP16-GD"
            }
          }
        ]
      }
    },
    {
      id: 'TC_02',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "TG-UC",
            item_g4: "SP",
            ibrand_1: "FOCUS",
            color: "Silver",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G0AS101-APIP16-SV",
            code_component: {
              code_semi: "S0AS101-APIP16-SV",
              code_tempered_glass: "T0AS101-APIP16-SV",
              code_tempered_ab: "TABS101-APIP16-SV"
            }
          }
        ]
      }
    },
    {
      id: 'TC_03',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "TG-UC",
            item_g4: "SP",
            ibrand_1: "BRIGHT",
            color: "Black",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G0AS103-APIP16-BK",
            code_component: {
              code_semi: "S0AS103-APIP16-BK",
              code_tempered_glass: "T0AS103-APIP16-BK",
              code_tempered_ab: "TABS103-APIP16-BK"
            }
          }
        ]
      }
    },
    {
      id: 'TC_04',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "TG-UC",
            item_g4: "SP",
            ibrand_1: "BRIGHT",
            color: "Transparent",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G0AS103-APIP16-TP",
            code_component: {
              code_semi: "S0AS103-APIP16-TP",
              code_tempered_glass: "T0AS103-APIP16-TP",
              code_tempered_ab: "TABS103-APIP16-TP"
            }
          }
        ]
      }
    },
    {
      id: 'TC_05',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "TG-UC",
            item_g4: "SP",
            ibrand_1: "THE_PIXEL",
            color: "Red",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G0AS102-APIP16-RD",
            code_component: {
              code_semi: "S0AS102-APIP16-RD",
              code_tempered_glass: "T0AS102-APIP16-RD",
              code_tempered_ab: "TABS102-APIP16-RD"
            }
          }
        ]
      }
    },
    {
      id: 'TC_18',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "F-DS MATTE",
            item_g4: "SP",
            ibrand_1: "FOCUS",
            color: "",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G05S511-APIP16",
            code_component: {
              code_semi: "S05S511-APIP16",
              code_tempered_glass: "",
              code_tempered_ab: ""
            }
          }
        ]
      }
    },
    {
      id: 'TC_19',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "F-DS MATTE",
            item_g4: "SP",
            ibrand_1: "BRIGHT",
            color: "",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G05S513-APIP16",
            code_component: {
              code_semi: "S05S513-APIP16",
              code_tempered_glass: "",
              code_tempered_ab: ""
            }
          }
        ]
      }
    },
    {
      id: 'TC_20',
      input: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            item_g3: "F-DS MATTE",
            item_g4: "SP",
            ibrand_1: "THE_PIXEL",
            color: "",
          }
        ]
      },
      expectedOutput: {
        ibrand_2: "APPLE",
        mode: "IP16",
        code: [
          {
            code_good: "G05S512-APIP16",
            code_component: {
              code_semi: "S05S512-APIP16",
              code_tempered_glass: "",
              code_tempered_ab: ""
            }
          }
        ]
      }
    }
  ];
  
  module.exports = testCases;
  