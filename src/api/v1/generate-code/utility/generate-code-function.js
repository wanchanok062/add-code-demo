const {
  Ibrand1,
  Ibrand2,
  ItemG3,
  ItemG4,
  ColorCode,
  CodeCondition,
} = require("../../../../models");

exports.generateMainCode = async (
  ibrand_2,
  mode,
  item_g3,
  item_g4,
  ibrand_1,
  color
) => {
  try {
    const itemG3Record = await ItemG3.findOne({
      where: { item_g3_code: item_g3 },
    });
    const itemG4Record = await ItemG4.findOne({
      where: { item_g4_code: item_g4 },
    });
    const itemB1Record = await Ibrand1.findOne({
      where: { item_b1_code: ibrand_1 },
    });
    const itemB2Record = await Ibrand2.findOne({
      where: { item_b2_code: ibrand_2 },
    });
    const colorRecord = await ColorCode.findOne({
      where: { film_type: color },
    });

    const digit_5_6 = itemG3Record ? itemG3Record.digit_5_6 : "00";
    const digit_4 = itemG4Record ? itemG4Record.digit_4 : "X";
    const digit_7 = itemB1Record ? itemB1Record.digit_7 : "0";
    const colorCode = colorRecord ? colorRecord.digit_19_20 : "";
    const digit_9_10 = itemB2Record ? itemB2Record.digit_9_10 : "";

    let prefix = item_g3.startsWith("F") ? "G05" : "G0A";
    let suffix = `${digit_4}${digit_5_6}${digit_7}-${digit_9_10}${mode}`;

    if (colorCode) {
      suffix += `-${colorCode}`;
    }

    const mainCode = `${prefix}${suffix}`;

    return mainCode;
  } catch (error) {
    console.error("Error generating main code:", error);
    throw new Error("Failed to generate main code");
  }
};

exports.generateSubCodes = async (item_g3, item_g4, ibrand_1, code_good) => {
  try {
    let code_semi = "",
      code_tempered_glass = "",
      code_tempered_ab = "";

    const conditionMatch = await CodeCondition.findOne({
      where: {
        item_b1_code: ibrand_1,
        item_g3_code: item_g3,
        item_g4_code: item_g4,
      },
    });
    let semiPrefix = item_g3.startsWith("F") ? "S05" : "S0A";
    const semiCode = `${semiPrefix}${code_good.substring(3)}`;
    code_semi = semiCode;
    if (conditionMatch) {
      code_tempered_glass = `T0A${code_good.substring(3)}`;
      code_tempered_ab = `TAB${code_good.substring(3)}`;
    }

    return { code_semi, code_tempered_glass, code_tempered_ab };
  } catch (error) {
    console.error("Error generating sub codes:", error);
    throw new Error("Failed to generate sub codes");
  }
};
