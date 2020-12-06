const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Choco = require('./models/chocoModel');
dotenv.config({path: './config.env'});
//console.log(process.env);
let DB = process.env.DB_LINK.replace('<password>', process.env.DB_PASSWORD);
DB = DB.replace('<username>', process.env.DB_USERNAME);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(con => console.log('DB connection succesfull!'));


const readChoco = JSON.parse(fs.readFileSync('./chocolate.json', 'utf-8'));


const immportData = async () => {
    try {
        await Choco.create(readChoco);
        console.log('data success');
        process.exit();
    } catch (error) {
        console.log(error);
    }
}


const deletetData = async () => {
    try {
        await Choco.deleteMany();
        console.log('data success deleted');
        process.exit();
    } catch (error) {
        console.log(error);
    }
}
console.log(process.argv);
if (process.argv[2] === '--import') {
    immportData();
}else if (process.argv[2] === '--delete') {
    deletetData();
}