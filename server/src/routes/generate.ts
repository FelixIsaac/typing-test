import {Router} from 'express';
// controllers
import {generate} from '../controllers/generate';

const router = Router();

router.get('/', (req, res) => {
  try {
    const response = generate(Number(req.query.length), {
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
  } catch (err) {
    console.error(err);

    res.status(500).send({
      'error': true,
      'status': 500,
      'message': err.message
    }).end();
  }
});

export default router;
