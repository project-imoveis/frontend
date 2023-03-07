import { useEffect, useState } from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useDropzone } from "react-dropzone";
import api from "@/@core/providers/api";
type Photo = {
  blob: string;
  name: string;
  size: number;
  extension: string;
};
export function PhotoUploader() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [isFull, setIsFull] = useState(false);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "image/*": [],
    },
    onDrop: (acceptedFiles) => {
      if (photos.length + acceptedFiles.length > 20) return setIsFull(true);
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

  function readURL(event: any) {
    const extension = event.target.files[0].name.split(".").pop();
    const extensionsAllowed = ["jpg", "png", "jpeg"];
    if (!event.target.files[0]) return;
    for (let i = 0; i < event.target.files.length; i++) {
      if (!extensionsAllowed.includes(extension)) continue;
      setupReader(event.target.files[i]);
    }
  }
  async function setupReader(file: any) {
    const reader = new FileReader();
    reader.onload = (event: any) => {
      const photo: Photo = {
        name: file.name,
        size: file.size,
        extension: file.type,
        blob: event.target.result,
      };
      setPhotos((oldPhotos) => [...oldPhotos, photo]);
    };
    await reader.readAsDataURL(file);
  }
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
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" type="COLUMN" direction="horizontal">
          {(provided) => (
            <section
              className="photoUploader_group"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              <div
                {...getRootProps({
                  className: `dropzone 
                  ${isFull ? "disabled" : ""}`,
                })}
              >
                <label htmlFor="propertyPhotosInput" className="photoUploader_label">
                  {isFull
                    ? "Não é possível adicionar mais fotos, o limite foi atingido."
                    : "Clique aqui para adicionar suas imagens"}
                  <span className="photoUploader_span">
                    {isFull
                      ? "Remova alguma foto para continuar"
                      : "*Formatos aceitos: jpg, png, jpeg"}
                  </span>
                </label>
                <input
                  className="photoUploader_input"
                  id="propertyPhotosInput"
                  type="file"
                  multiple
                  accept="image/jpg, image/png, image/jpeg"
                  {...(isFull ? { disabled: true } : {})}
                  {...getInputProps()}
                />
              </div>
              <p>{photos.length}/20 fotos</p>
              <div className="photoUploader_previewGroup">
                {photos.map((photo, id) => (
                  <Draggable key={photo.name} draggableId={photo.name} index={id}>
                    {(provided) => (
                      <div
                        className="photoUploader_imageWrapper"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <h1 className="photoUploader_imageWrapper_title">Foto principal</h1>
                        <button
                          type="button"
                          className="photoUploader_imageWrapper_close"
                          onClick={() => removePhoto(id)}
                        >
                          <BsTrash />
                        </button>
                        <Image
                          className="photoUploader_imageWrapper_image"
                          placeholder="blur"
                          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQC"
                          src={photo.preview}
                          alt="foto"
                          fill
                          onLoad={() => {
                            URL.revokeObjectURL(photo.preview);
                          }}
                        />
                        <input
                          className="photoUploader_imageWrapper_legenda"
                          placeholder="Legenda..."
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            </section>
          )}
        </Droppable>
      </DragDropContext>
      <button type="button" className="photoUploader_button" onClick={Submit}>
        Enviar
      </button>
    </div>
  );
}
