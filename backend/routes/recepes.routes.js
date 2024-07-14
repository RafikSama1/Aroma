const {Router} = require('express');

const recepesController = require('../controllers/recepe.controller');
const errorHandler = require('../middlewares/errorHandler.middleware');
const objectIdMiddleware = require('../middlewares/objectId.middleware');

const authMiddleware = require('../middlewares/auth.middleware');

const recipeValidation = require('../validation/recipes.validation');
const validator = require('../middlewares/validator.middleware');

const multer = require('multer');
const upload = multer({dest: "public/uploads/"});

const router = Router();

router.get('/recepes', errorHandler(recepesController.index));
router.post('/recepes', authMiddleware, upload.single('image_url'), validator(recipeValidation.blog),errorHandler(recepesController.store));
router.get('/recepes/:id', objectIdMiddleware, errorHandler(recepesController.show));
router.put('/recepes/:id', authMiddleware, upload.single('image_url'),objectIdMiddleware, validator(recipeValidation.blog),errorHandler(recepesController.update));
router.delete('/recepes/:id', authMiddleware, objectIdMiddleware, errorHandler(recepesController.delete));

module.exports = router;