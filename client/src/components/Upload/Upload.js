
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button } from "reactstrap";

function Upload() {

  // state = {
  //   showUploadOverlay: false // flag to toggle for the overlay to appear
  // }

  // toggleUploadOverlay = () => {
  //   this.setState({
  //     showUploadOverlay: !this.state.showUploadOverlay
  //   })
  // }

    return (
      <div id="#Upload">
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="containedTest Sentry-modal-title-vcenter">
            Modal heading
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Centered Modal</h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.showUploadOverlay}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>

    );

  }

export { Upload };


// function Upload() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
//     <>
//       <Button variant="primary" onClick={() => setModalShow(true)}>
//         Launch vertically centered modal
//       </Button>

//       <MyVerticallyCenteredModal
//         show={modalShow}
//         onHide={() => setModalShow(false)}
//       />
//     </>
//   );
// }



// import { Container } from 'reactstrap';
// import {useDropzone} from 'react-dropzone';
// import ProgressBar from '/components/Upload/Progress.js';

// class Upload extends Component { 
//   state = {show: false};

//   showModal = () => {
//     this.setState({show:true});
//   };

//   hideModal = () => {
//     this.setState({show: false});
//   };

//   render() {
//     return (
//       <main>
//         <hi> React Modal</hi>
//         <button type="button" onClick={this.showModal}>
//           open
//         </button>
//       </main>
//     );
//   }
// }
// const container = document.createElement("div");
// document.body.appendChild(container);
// ReactDOM.render(<Upload/>, container);

// const Modal = ({handleClose, show, children}) => {
//   const showHideClassName = show ? "modal display-block" : "modal display-none";

//   return (
//     <div className={showHideClassName}>
//       <section className="modal-main">
//         {children}
//         <button onClick={handleClose}>close</button>
//       </section>
//     </div>
//   )
// }
// export default Upload;


// function Upload(props) {
//   const {acceptedFiles, getRootProps, getInputProps} = useDropzone();
  
//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <section className="container">
//       <div {...getRootProps({className: 'dropzone'})}>
//         <input {...getInputProps()} />
//         <p>Drag and drop some files here, or click to select files</p>
//       </div>
      
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// }

// export default Upload;

