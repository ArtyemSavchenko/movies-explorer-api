const router = require('express').Router();
const { getUser, updateUser } = require('../controllers/users');
const { validateUpdatingUser } = require('../middlewares/validation');

router.get('/me', getUser);
router.patch('/me', validateUpdatingUser, updateUser);

module.exports = router;
