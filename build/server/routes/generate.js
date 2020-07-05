"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// controllers
const generate_1 = require("../controllers/generate");
const router = express_1.Router();
router.get('/', (req, res) => {
    try {
        const response = generate_1.generate(Number(req.query.length), {
            'punctuation': req.query.punctuation === 'true',
            'caps': req.query.caps === 'true',
            'wordLength': {
                'length': Number(req.query.wordLength),
                'selector': String(req.query.wordSelector)
            }
        });
        res.send({
            'error': false,
            'status': 200,
            response
        });
    }
    catch (err) {
        console.error(err);
        res.status(500).send({
            'error': true,
            'status': 500,
            'message': err.message
        }).end();
    }
});
exports.default = router;
//# sourceMappingURL=generate.js.map