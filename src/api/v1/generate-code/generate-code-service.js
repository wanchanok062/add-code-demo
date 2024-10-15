const { generateMainCode } = require("./utility/generate-code-function");
const { generateSubCodes } = require("./utility/generate-code-function");

exports.processCodeGeneration = async (data) => {
  try {
    const { document_id, document_status, ibrand_2, mode, code } = data;

    const generatedCodes = [];

    for (const item of code) {
      const { id, item_g3, item_g4, ibrand_1, color } = item;

      const code_good = await generateMainCode(
        ibrand_2,
        mode,
        item_g3,
        item_g4,
        ibrand_1,
        color
      );

      const { code_semi, code_tempered_glass, code_tempered_ab } =
        await generateSubCodes(item_g3, item_g4, ibrand_1, code_good);

      generatedCodes.push({
        id: id || "UUID create after save code.",
        code_good,
        code_component: {
          code_semi,
          code_tempered_glass,
          code_tempered_ab,
        },
      });
    }

    return {
      document_id: document_id || "create after save code.",
      document_status: document_status || "create after save code.",
      ibrand_2,
      mode,
      code: generatedCodes,
    };
  } catch (error) {
    console.error("Error in code generation:", error);
    throw new Error("Code generation failed");
  }
};
