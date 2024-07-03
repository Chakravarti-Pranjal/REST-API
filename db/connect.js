const mongoose = require('mongoose');

uri = "mongodb+srv://989techp:mixeSG1MnWVHh4uv@pranjalapi.2wd1kyh.mongodb.net/PranjalAPI?retryWrites=true&w=majority&appName=PranjalAPI";


const connectDB = () => {

    console.log('database connected')
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB ;