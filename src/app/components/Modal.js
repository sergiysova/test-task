import React from 'react';

const Modal = ({onModalClosed}) => {


  return (
    <div className="modal " tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close"  onClick={onModalClosed}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <h3>Congratulations</h3>
          <p>You have successfully passed the registration</p>
          <button type='button' onClick={onModalClosed}>Great</button>
        </div>
      </div>
    </div>
  </div>
)
}

export default Modal;