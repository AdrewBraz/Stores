const express = require('express');
const router = express.Router();

const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');

const { catchErrors } = require('../handlers/errorHandlers')

router.get('/', storeController.homePage);

router.get('/add', storeController.addStore);

router.post('/add',
 storeController.upload,
 catchErrors(storeController.resize),
 catchErrors(storeController.createStore));

router.post('/add/:id',
storeController.upload,
catchErrors(storeController.resize),  
catchErrors(storeController.updateStore));


router.get('/stores', catchErrors(storeController.getStores));

router.get(`/stores/:id/edit`, catchErrors(storeController.editStore));
router.get('/store/:slug', catchErrors(storeController.getStoreBySlug))

router.get(`/tags`, catchErrors(storeController.getStoreByTag));
router.get('/tags/:tag', catchErrors(storeController.getStoreByTag))

router.get('/login', userController.login);
module.exports = router;