require('dotenv').config()

module.exports = {
    index: (req, res) => {
        res.render('index.ejs', { id: req.query.id })
    }
}