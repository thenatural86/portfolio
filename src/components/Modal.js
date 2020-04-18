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
            <p>
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
              IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem Ipsum
            </p>
            {/* <button onClick={props.modal}>exit</button> */}
          </div>
        </div>
      </div>
      {/* <button onClick={() => props.modal()}>Close Modal?</button> */}
    </div>
  )
}

export default Modal
