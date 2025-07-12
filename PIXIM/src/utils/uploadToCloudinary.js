export const uploadToCloudinary = async (file) => {
  const cloudName = import.meta.env.VITE_CLUD_NAME;
  const uploadPreset = import.meta.env.VITE_UPLOAD_PRESET;

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
