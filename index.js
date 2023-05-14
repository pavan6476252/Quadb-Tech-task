const express = require('express');
const mongoose = require('mongoose');
const app = express();


app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://quadb-tech-task.vercel.app");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
});


const uri = 'mongodb+srv://pavan6476252:7b9mbednea@pavan.p9x1pth.mongodb.net/?retryWrites=true&w=majority'

// Connect to MongoDB using Mongoose
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));



//serve static pages
app.use(express.static('public'));

const Schema = mongoose.Schema;

const DataSchema = new Schema({
    name: String,
    last: String,
    buy: String,
    sell: String,
    volume: String,
    base_unit: String
});

const DataModel = mongoose.model('Data', DataSchema);
// Create a route to store the data
app.get('/storecoins', async (req, res) => {

    try {
        const response = await fetch("https://api.wazirx.com/api/v2/tickers");

        const data = await response.json();


        for (const [key, value] of Object.entries(data)) {
            const { name, last, buy, sell, volume, base_unit } = value;
            const newData = new DataModel({ name, last, buy, sell, volume, base_unit });
            newData.save()
                .then(() => console.log(`${name} saved to database`))
                .catch((err) => console.log(`Error saving ${name} to database: ${err}`));
        }




        res.status(200).json(result);
    }
    catch (error) {
        console.log(error);
        res.status(500).send('Error while storing data || fetch data')
    }

});

// getting coin data
app.get('/coins', async (req, res) => {
    try {
        
        const data = await DataModel.find().limit(10);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error);
    }

})

// Start the server
const port = 3000;
app.listen(port, () => console.log(`Server started... in ${port}`));
