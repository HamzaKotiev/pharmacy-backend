const Client = require('../models/Сlients,model');
const Medicine = require('../models/Medicines.model');
const Drugcategories = require('../models/Drugcategories.models');

module.exports.clientFunctionalitisControler = {
    getAllMedicine: (req, res) => {
        Medicine.find({}).then((medic) => {
            res.json(medic)
        })
    },
    getAllMedicineByСategories: (req, res) => {
        Medicine.find({ drugcategoriesSchema: req.params.Id }, {}).then((medic) => {
            res.json(medic)
        })
    },
    getMedicineById: (req, res) => {
        Medicine.findById(req.params.id).then((medic) => {
            res.json(medic)
        })
    },
    patchAddMedicineByIdInBasket: async (req, res) => {
        const medicine = await Medicine.findById(req.params.Id);
        const client = await Client.findById(req.body.Id);
        if (medicine.recipe == true && client.recipe === false) {
            return res.json('нужен рецепт для покупки лекарства ')
        }
        Client.findByIdAndUpdate({ _id: req.body.clientId }, {
            $push: { basket: [] }
        }, { new: true }).then(() => {
            res.json(medicine)
        });

    },
    DeleteMedicineByIdInBasket: async (req, res) => {
        const medicine = await Medicine.findById(req.params.Id);
        Client.findById({ _id: req.body.clientId }, {
            $pull: { basket: [] }
        },).then(() => {
            res.json('лекарство удалено')
        });
    },
    DeleteAllMedicineInBasket: (req, res) => {
        Client.find({ _id: req.params.Id }, {
            $pullAll: { basket: [] }
        }).then(() => {
            res.json('лекарства удалены')
        });
    },
    buyGoodsFromCart: async (req, res) => {
        const client = await Client.findById(req.params.Id).populate('basket');
        const finelSum = await client.basket.reduce((sum, item) => {
            return sum + item.price
        }, 0)
        if (finelSum > client.wallet) {
            return res.json('Денег мало ')
        }
        await Client.findByIdAndUpdate({ _id: req.params.Id }, {
            $pullAll: { basket: [] }
        }, { new: true }).then((clien) => {
            res.json(clien)
        })
        await Client.findByIdAndUpdate({ _id: req.params.Id }, {
            wallet: client.wallet -= finelSum
        }, { new: true }).then((clien) => {
            res.json(clien)
        })
    },
    fillUpTheCough: async (req, res) => {
        Client.findByIdAndUpdate({ _id: req.params.Id }, {
            wallet: req.body.wallet
        }, { new: true }).then((client) => {
            res.json(client)
        });

    }
}