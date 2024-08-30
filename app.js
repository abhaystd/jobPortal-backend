const express = require('express');
const app = express();
const MongoDB = require('./config/databasse')
const fileUpload = require('express-fileupload')
const cloudinaryUploadFile = require('./utils/cloudinaryupload');
const route = require("./route/user")
const cors = require('cors');

app.use(cors());

app.use(express.json());
app.use(fileUpload({
   useTempFiles : true,
    tempFileDir : '/tmp/'
}));






MongoDB.connect()
const PORT = 4000;

cloudinaryUploadFile;
app.use('/api/v1',route);

app.listen(PORT,()=>{
    console.log(`sever is running on port no ${PORT}`);
})