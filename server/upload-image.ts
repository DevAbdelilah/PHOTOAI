"use server";

import { actionClient } from "@/lib/safe-action";
import { UploadApiResponse, v2 as cloudinary } from "cloudinary";
import { error } from "console";
import z from "zod";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const formData = z.object({
  image: z.instanceof(FormData),
});

export const uploadImage = actionClient
  .schema(formData)
  .action(async ({ parsedInput: { image } }) => {
    const formImage = image.get("image");

    if (!formImage) return { error: "No image was provided" };
    if (!image) return { error: "No image was provided" };

    const file = formImage as File;
    type UploadResult=
    |{success:UploadApiResponse;error?:never}
    |{error:}

    try {
      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      return new Promise<UploadApiResponse>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream({
          upload_preset: process.env.CLOUDINARY_NAME,
        },(error,result)=>{

            if(error || !result)=>{

                reject({error:"Something went wrong "})
            }else{
                resolve({success:result})
            }
        });
      });
    } catch {}
  });
