export function Dropzone({ isFull, isDragReject, isDragActive, getRootProps, getInputProps }: any) {
  return (
    <div
      {...getRootProps({
        className: `dropzone 
          ${isFull ? "disabled" : ""}`,
      })}
    >
      <label
        className={`photoUploader_label ${
          isDragReject
            ? "photoUploader_label_isDragReject"
            : isDragActive
            ? "photoUploader_label_isDragActive"
            : null
        }`}
      >
        {isFull
          ? "Não é possível adicionar mais fotos, o limite foi atingido."
          : isDragReject
          ? "Arquivo não suportado"
          : isDragActive
          ? "Solte suas fotos aqui"
          : "Arraste ou clique aqui para adicionar suas imagens"}
        <span className="photoUploader_span">
          {isFull ? "Remova alguma foto para continuar" : "*Formatos aceitos: jpg, png, jpeg"}
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
  );
}
