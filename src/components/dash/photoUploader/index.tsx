import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import api from "@/@core/providers/api";
import PreviewGroup from "./PreviewGroup";
import { Dropzone } from "./Dropzone";

export function PhotoUploader() {
  const [images, setImages] = useState<any[]>([]);
  const [isFull, setIsFull] = useState(false);
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      if (images.length + acceptedFiles.length > 20) return setIsFull(true);
      setImages((oldImages) => [
        ...oldImages,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
      if (images.length == 20) setIsFull(true);
    },
  });
  function removeItem(id: number) {
    setImages((oldImages) => oldImages.filter((image, index) => index !== id));
    setIsFull(false);
  }
  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    const itemsReordered = reorder(images, result.source.index, result.destination.index);
    setImages(itemsReordered);
  }
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  function handleUpload() {
    const uploadedImages = images.map((image, index) => ({
      image,
      name: image.name,
      size: image.size, // in bytes
      subtitles: (document.getElementById(`${index}_legenda_id`) as any).value || "",
      isMain: index == 0 ? true : false,
    }));
    uploadedImages.forEach(Submit);
  }
  async function Submit(uploadedImage: any) {
    const data = new FormData();
    data.append("image", uploadedImage.image);
    data.append("user_id", "14");
    data.append("property_id", "16");
    data.append("isMain", uploadedImage.isMain);
    data.append("subtitles", uploadedImage.subtitles);
    try {
      await api.post("/images/property/upload", data, {
        headers: { "Content-Type": uploadedImage.image.type },
      });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    return () => images.forEach((image) => URL.revokeObjectURL(image.preview));
  });
  return (
    <div className="photoUploader">
      <h2>Escolha suas melhores fotos</h2>
      <section className="photoUploader_group">
        <Dropzone {...{ isFull, isDragReject, isDragActive, getRootProps, getInputProps }} />
        <PreviewGroup images={images} removeItem={removeItem} onDragEnd={onDragEnd} />
      </section>
      <button
        type="button"
        className="photoUploader_button"
        {...(images.length == 0 ? { disabled: true } : {})}
        onClick={handleUpload}
      >
        Enviar
      </button>
    </div>
  );
}
