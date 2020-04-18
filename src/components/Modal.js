import React from "react"

function Modal(props) {
  return (
    <div className="modal">
      <div className={`modalBackground modalShowing-${props.modal}`}>
        <div className="modalInner">
          <div className="modalImage">
            <img
              src="https://images.unsplash.com/photo-1586984478679-9f1ae1573ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80"
              alt="street"
            />
          </div>
          <div className="modalText">
            <h2>Modal header</h2>
            <p>
              Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem
              IpsumLorem Ipsum Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
              IpsumLorem IpsumLorem Ipsum
            </p>
            <form action="">
              <button>Join Now!</button>
            </form>
            <button className="exitButton" onClick={() => props.modal()}>
              exit
            </button>
          </div>
        </div>
      </div>
      <button onClick={() => props.modal()}>Close Modal?</button>
    </div>
  )
}

export default Modal
