const { Router } = require('express');
const { clientFunctionalitisControler } = require('../controllers/client.functionalitis.comtroller');

const router = Router();

router.get('/medecin/all', clientFunctionalitisControler.getAllMedicine)
router.get('/medecin/all/cat', clientFunctionalitisControler.getAllMedicineByСategories)
router.get('/medecin/medic/:Id', clientFunctionalitisControler.getMedicineById)
router.patch('/medecin/addmedic/inbasket/:Id', clientFunctionalitisControler.patchAddMedicineByIdInBasket)
router.delete('/medecin/', clientFunctionalitisControler.DeleteMedicineByIdInBasket)
router.delete('/medecin/', clientFunctionalitisControler.DeleteAllMedicineInBasket)
router.patch('/medecin/buy/:Id', clientFunctionalitisControler.buyGoodsFromCart)
router.patch('/medecin/fill/:id', clientFunctionalitisControler.fillUpTheCough)


module.exports = router;
