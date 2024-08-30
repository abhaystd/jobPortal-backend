const cloudinary = require('cloudinary').v2;
require('dotenv').config();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API,
    api_secret: process.env.API_SECRET,
});

const cloudinaryUploadFile = async (filePath) => {
    try {
        const result = await cloudinary.uploader.upload(filePath,{
          folder:process.env.FOLDER_NAME
        });
        return result;
    } catch (error) {
        throw new Error('Failed to upload file to Cloudinary: ' + error.message);
    }
};

module.exports = cloudinaryUploadFile;
