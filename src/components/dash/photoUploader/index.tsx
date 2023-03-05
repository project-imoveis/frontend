import { useState } from "react";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
type Photo = {
  blob: string;
  name: string;
  size: number;
  type: string;
};
export function PhotoUploader() {
  const [photos, setPhotos] = useState<any[] | Photo[]>([]);
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
        type: file.type,
        blob: event.target.result,
      };
      setPhotos((oldPhotos) => [...oldPhotos, photo]);
    };
    await reader.readAsDataURL(file);
  }
  function removePhoto(id: number) {
    setPhotos((oldPhotos) => oldPhotos.filter((photo, index) => index !== id));
  }
  function onDragEnd(result: any) {
    // dropped outside the list
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
              <label htmlFor="propertyPhotosInput" className="photoUploader_label">
                Clique aqui para adicionar suas imagens
                <span className="photoUploader_span">*Formatos aceitos: jpg, png, jpeg</span>
              </label>
              <input
                className="photoUploader_input"
                id="propertyPhotosInput"
                type="file"
                multiple
                accept="image/jpg, image/png, image/jpeg"
                onChange={readURL}
              />
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
                        src={photo.blob}
                        alt="foto"
                        fill
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
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
