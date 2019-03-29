module.exports = {
    read: (req, res) => {
        const db = req.app.get('db')

        db.get_inventory()
        .then(products => {
            res.status(200).send(products)
        })
        .catch(err => console.log('ctrl.read', err))
    },

    create: (req, res) => {
        const db = req.app.get('db')

        db.create_product(req.body)
        .then(() => {
            res.sendStatus(201)
        })
        .catch(err => console.log('ctrl.create', err))
    },

    update: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.query
        const { price, img } = req.body

        await db.product.save({ product_id: id,  price: price, img: img})
        .catch(err => res.sendStatus(501))
        res.sendStatus(201)
    },

    delete: async (req, res) => {
        const db = req.app.get('db')

        await db.delete_product(req.query.id)
        res.sendStatus(200)
    }
}