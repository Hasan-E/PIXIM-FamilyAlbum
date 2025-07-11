import { useRef, useState } from "react";
import { uploadToCloudinary } from "../utils/uploadToCloudinary";

const useImageUpload = (onUploadSuccess) => {
  const fileInputRef = useRef();
  const [preview, setPreview] = useState();
  const [uploading, setUploading] = useState(false);

  const handleImageSelect = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));
    setUploading(true);

    try {
      const imageUrl = await uploadToCloudinary(file);

      if (onUploadSuccess) {
        onUploadSuccess(imageUrl);
      }
    } catch (err) {
      console.error("Yükleme Hatası:", err);
      alert("Görsel yüklenemedi.");
    }

    setUploading(false);
  };

  return {
    fileInputRef,
    preview,
    uploading,
    handleImageSelect,
  };
};

export default useImageUpload;
