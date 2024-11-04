"use client";

import { useDropzone } from "react-dropzone";
import { uploadImage } from "../../../server/upload-image";
import { Card, CardContent } from "../ui/card";

export function UploadImage() {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
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

        const res = await uploadImage({ image: formData });
      }
    },
  });

  return (
    <Card {...getRootProps()}>
      <CardContent>
        <input {...getInputProps()} type="text" />
        <div>
          <h1> cool animation</h1>
          <p>
            {isDragActive
              ? "Drop your image "
              : "Start by uploading your image "}
          </p>
          <p>Supported formats .jpeg .png .wepb .jpg</p>
        </div>
      </CardContent>
    </Card>
  );
}
