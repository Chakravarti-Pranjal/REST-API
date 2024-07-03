const express = require('express');
const app = express()
const connectDB = require('./db/connect')

const PORT = process.env.PORT || 5001 ;

const product_routes = require('./routes/products')

app.get("/", (req,res) => {
    res.send('Hello World')
})

// middleware or to set router
app.use('/api/products', product_routes)

app.listen(PORT, async () => {
    try {
        await connectDB();
         console.log(`Server is connecting on port: ${PORT}`)
    } catch (error) {
        console.log(`database not connected`)
    }
   
})