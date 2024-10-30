"use client";

import { useDropzone } from "react-dropzone";

export function UploadImage() {
  const {} = useDropzone({
    maxFiles: 1,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg"],
      "image/webp": [".webp"],
      "image/jpeg": [".jpeg"],
    },

    onDrop: async (acceptFiles, fileRejecctions) => {
      if (acceptFiles.length) {
        const formData = new FormData();
        formData.append("image", acceptFiles[0]);
        const ObjectUrl = URL.createObjectURL(acceptFiles[0]);
        //state management stuff  to create layers ,set the active  layer ,set the active layer,set the image as the active layer
      }
    },
  });

  return (
    <div>
      <h1>Upload image</h1>
    </div>
  );
}
