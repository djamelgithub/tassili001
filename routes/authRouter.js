const router = require('express').Router()
const authCtrl = require('../controllers/authCtrl')

router.post('/register', authCtrl.register)

router.post('/login', authCtrl.login)

router.post('/logout', authCtrl.logout)

router.post('/refresh_token', authCtrl.generateAccessToken)

router.get('/user/check-account-status',   authCtrl.checkAccountStatus);
// Definir la ruta para establecer la fecha de expiración del usuario
router.post('/user/:id/fecha',  authCtrl.setExpirationDate);
module.exports = router