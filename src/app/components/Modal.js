import React from 'react';

const Modal = ({onModalClosed, shown}) => {
  const classNmaes = `modal ${shown ? 'shown' : ''}`

  return (
    <div className={classNmaes} tabIndex="-1" role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
        <h3>Congratulations</h3>
          <button type="button" className="close"  onClick={onModalClosed}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="modal-body">
          <p>You have successfully passed the registration</p>
        </div>
        <div className="modal-footer">

          <button type='button' className='btn right short' onClick={onModalClosed}>Great</button>
        </div>
      </div>
    </div>
  </div>
)
}

export default Modal;