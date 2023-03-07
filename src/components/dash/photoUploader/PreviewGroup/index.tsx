import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
export default function PreviewGroup({ photos, removePhoto, onDragEnd }: any) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="COLUMN" direction="horizontal">
        {(provided) => (
          <>
            <p>{photos.length}/20 fotos</p>
            <div
              className="photoUploader_previewGroup"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {photos.map((photo: any, id: number) => (
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
          </>
        )}
      </Droppable>
    </DragDropContext>
  );
}
