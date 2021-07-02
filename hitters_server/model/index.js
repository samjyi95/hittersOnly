const bodyParser = require('body-parser');
const express    = require('express');
const mongoose   = require('mongoose');

const app = express();

mongoose.Promise = global.Promise;
monogoose.connect(process.env.MONGOBD_URI || `mongodb://localhost:27017/node-react-starter`);

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`app running on ${PORT}`)
})
