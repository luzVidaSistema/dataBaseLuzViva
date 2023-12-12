var express = require('express');
var router = express.Router();
const midFun = require("../middleware/middleware")
const crudFun = require("../controllers/crud");
const logFun = require('../controllers/login');
const useFun = require("../controllers/usuarios");
const admFun = require('../controllers/datSistem');

router.post("/created",midFun.verifyLog,crudFun.created);
router.post("/readAll",midFun.verifyLog,crudFun.readAll);
router.post('/readTime',midFun.verifyLog,crudFun.readTime);
router.post('/readTimeUser',midFun.verifyLog,crudFun.readTimeUser);
router.post('/readTimeTime',midFun.verifyLog,crudFun.readTimeTime);
router.post('/readTimeTimeUser',midFun.verifyLog,crudFun.readTimeTimeUser);
router.post("/readId",midFun.verifyLog,crudFun.readId);
router.post('/readUser',midFun.verifyLog,crudFun.readUser);
router.post('/update',midFun.verifyLog,crudFun.update);
router.post('/delet',midFun.verifyLog,crudFun.delet);
router.post("/readIds",midFun.verifyLog,crudFun.readIds);
router.post("/count",midFun.verifyLog,crudFun.count);

router.post('/login',[],logFun.login);
router.post('/updatePassword',midFun.verifyLog,logFun.updatePassword);

router.post("/createdAdminInit",[],useFun.createdAdminInit);
router.post("/createdUse",midFun.verifyLog,useFun.createdUse);

router.post("/sizeDB",midFun.verifyLog, admFun.sizeDB);
router.post("/readNumNota",midFun.verifyLog, admFun.readNumNota);
router.post("/writeNumNota",midFun.verifyLog, admFun.writeNumNota);
router.post("/sizeDisk",midFun.verifyLog, admFun.sizeDisk);
router.post("/clearDisk",midFun.verifyLog, admFun.clearDisk);
router.post("/numNichosProceso",midFun.verifyLog, admFun.numNichosProceso);

router.get('/onServer',[],(req,rsp)=>{rsp.send({msg:"active"})})
module.exports = router;
