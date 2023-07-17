function InfoTooltip({ isOpen, onClose, isSuccess }) {
  return (
    <div className={`popup ${isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container">
        <div className={`popup__success ${isSuccess ? "popup__success_type_true" : "popup__success_type_false"}`} />
        <h2 className="popup__text">{isSuccess ? "Редактирование успешно" : "Что-то пошло не так! Попробуйте еще раз."}</h2>
        <button className="popup__close-button" aria-label="закрыть попап" type="button" onClick={onClose}></button>
      </div>
    </div>
  )
}

export default InfoTooltip;