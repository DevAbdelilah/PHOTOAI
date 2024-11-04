"use client ";

import Editor from "@/components/editor";
import { UploadImage } from "@/components/upload/upload-image";

export default function Home() {
  return (
    <div className="">
      <Editor />
      <UploadImage />
    </div>
  );
}
