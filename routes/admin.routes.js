const { Router } = require('express');
const { adminControler } = require('../controllers/admins.controller');

const router = Router();

router.post('/admin/pas422873', adminControler.postMedicine);
router.patch('/admin/pas422873/:Id', adminControler.patchMedicine);
router.delete('/admin/pas422873/:Id', adminControler.deleteMedicine)

router.post('/admin/pas422873/drud', adminControler.postDrugcategories);
router.patch('/admin/pas422873/drud/:Id', adminControler.patchDrugcategories);
router.delete('/admin/pas422873/drud/:Id', adminControler.deleteDrugcategories)




module.exports = router;
