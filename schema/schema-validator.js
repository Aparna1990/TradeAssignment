const joi = require('joi');
class SchemaValidator { 
    constructor() { }

   async validateRequest(schema, req, res) {
        try {
            await joi.validate(req.body, schema);
        } catch (e) { 
            res.status(400).send(e.details);
        }
    }
}


module.exports = SchemaValidator;