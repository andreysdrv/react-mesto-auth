import PopupWithForm from "./PopupWithForm"

export default function InfoTooltip({ isOpen, onClose, name, title, imgPath }) {
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name={name}
      title={title}
      imgPath={imgPath}
    >
    </PopupWithForm>
  )
}