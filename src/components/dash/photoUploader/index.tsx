import { useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import api from "@/@core/providers/api";
import PreviewGroup from "./PreviewGroup";
import { Dropzone } from "./Dropzone";

export function PhotoUploader() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [isFull, setIsFull] = useState(false);
  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles) => {
      if (photos.length + acceptedFiles.length > 20) return setIsFull(true);
      console.log(photos);
      setPhotos((oldPhotos) => [
        ...oldPhotos,
        ...acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        ),
      ]);
      if (photos.length == 20) setIsFull(true);
    },
  });
  function removePhoto(id: number) {
    setPhotos((oldPhotos) => oldPhotos.filter((photo, index) => index !== id));
    setIsFull(false);
  }
  function onDragEnd(result: any) {
    if (!result.destination) {
      return;
    }
    const itemsReordered = reorder(photos, result.source.index, result.destination.index);
    setPhotos(itemsReordered);
  }
  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };
  async function Submit() {
    try {
      await api.post("/images/properties/upload", { images: photos, user_id: 14, property_id: 16 });
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    return () => photos.forEach((file) => URL.revokeObjectURL(file.preview));
  });
  return (
    <div className="photoUploader">
      <h2>Escolha suas melhores fotos</h2>
      <section className="photoUploader_group">
        <Dropzone {...{ isFull, isDragReject, isDragActive, getRootProps, getInputProps }} />
        <PreviewGroup photos={photos} removePhoto={removePhoto} onDragEnd={onDragEnd} />
      </section>
      <button
        type="button"
        className="photoUploader_button"
        {...(photos.length == 0 ? { disabled: true } : {})}
        onClick={Submit}
      >
        Enviar
      </button>
    </div>
  );
}
