import cloudinary from "./cloudinary.js";

export async function uploadToCloudinary(filePath, folder = "gallery") {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder,
      resource_type: "image",
    });

    return {
      url: result.secure_url,
      public_id: result.public_id,
    };
  } catch (err) {
    throw new Error("Cloudinary Upload Failed: " + err.message);
  }
}
