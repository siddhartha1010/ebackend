const cloudinary = require("cloudinary").v2;
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

async function videoUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "video",
  });

  return result;
}

async function imageMultipleUploadUtil(files) {
  const uploadPromises = files.map((file) => {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        { resource_type: "auto" },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      );
      uploadStream.end(file); // Send the buffer to Cloudinary's upload_stream
    });
  });

  return Promise.all(uploadPromises);
}
const upload = multer({ storage });

module.exports = {
  upload,
  imageUploadUtil,
  videoUploadUtil,
  imageMultipleUploadUtil,
};
