const generateCodeService = require('./generate-code-service');

exports.generateCode = async (req, res) => {
    try {
        const data = req.body;
        const result = await generateCodeService.processCodeGeneration(data);
        return res.status(200).json(result);
    } catch (error) {
        console.error('Error generating code:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
};
