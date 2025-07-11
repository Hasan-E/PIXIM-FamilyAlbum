
export const uploadToCloudinary = async (file) => {
  const cloudName = "dnjonhcru";
  const uploadPreset = "unsigned_presets";

  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", uploadPreset);

  const response = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (response.ok) {
    return data.secure_url; 
  } else {
    throw new Error(data.error?.message || "Cloudinary upload failed");
  }
};
