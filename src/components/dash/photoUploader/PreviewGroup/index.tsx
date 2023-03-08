import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import Image from "next/image";
import { BsTrash } from "react-icons/bs";
export default function PreviewGroup({ images, removeItem, onDragEnd }: any) {
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable" type="COLUMN" direction="horizontal">
        {(provided) => (
          <>
            <p>{images.length}/20 fotos</p>
            <div
              className="photoUploader_previewGroup"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {images.map((image: any, id: number) => (
                <Draggable key={image.name} draggableId={image.name} index={id}>
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
                        onClick={() => removeItem(id)}
                      >
                        <BsTrash />
                      </button>
                      <Image
                        className="photoUploader_imageWrapper_image"
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQC"
                        src={image.preview}
                        alt="foto"
                        fill
                        onLoad={() => {
                          URL.revokeObjectURL(image.preview);
                        }}
                      />
                      <input
                        className="photoUploader_imageWrapper_legenda"
                        placeholder="Legenda..."
                        id={`${id}_legenda_id`}
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
