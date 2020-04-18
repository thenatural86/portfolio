import React from "react"

function Modal(props) {
  // console.log(props)
  return (
    <div className="modal">
      <div
        onClick={props.modal}
        className={`modalBackground modalShowing-${props.modalState}`}
      >
        <div className="modal-inner">
          <div className="modalImage">
            <img src={props.modalCard.image} alt="street" />
          </div>
          <div className="modalText">
            <h2>{props.modalCard.name}</h2>
            <p>{props.modalCard.description}</p>
            <h6>Technologies:</h6> <p>{props.modalCard.specs}</p>
          </div>
        </div>
      </div>
      {/* <button onClick={() => props.modal()}>Close Modal?</button> */}
    </div>
  )
}

export default Modal
