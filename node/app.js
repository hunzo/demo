const ex = require('express')

const app = ex()

app.get('/', (req, res) => {
    res.json({
        info: 'hello world, nodejs'
    })
})

app.listen(process.env.PORT || 3000)