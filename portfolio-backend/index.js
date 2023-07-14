const express = require('express');
const cors = require('cors');
const Profile = require('./Data/Profile_Details');


const port = 8080;
const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    res.send({Profile});
})


app.listen(port, () => {
    console.log(`Backend code is running on port ${port}`);
})