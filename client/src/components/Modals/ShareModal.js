import React, { useState, useMemo } from 'react';
import { Button, Modal } from 'reactstrap';


const ShareModal = (props) => {
  const { isOpen, toggleOpen, title, uploadMethod } = props;

  return (
    <Modal
      className="modal-dialog-centered"
      isOpen={isOpen}
      toggle={toggleOpen}
    >
      <div className="modal-header">
        <h3 className="modal-title" id="exampleModalLabel">
          {title}
        </h3>
        <button
          aria-label="Close"
          className="close"
          data-dismiss="modal"
          type="button"
          onClick={toggleOpen}
        >
          <span aria-hidden={true}>×</span>
        </button>
      </div>

    </Modal>
  );
};

export default ShareModal;