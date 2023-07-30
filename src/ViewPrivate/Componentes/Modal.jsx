import Modal from "react-modal"

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  Modal.setAppElement('#root')

export const AlerModal = () =>{

    const onCloseModal= () =>{
    console.log("hh")
  }

    return(
        <Modal isOpen={true} onRequestClose={onCloseModal} style={customStyles} >
          <div style={""}>
            <h1>Alerta</h1>
          </div>
        </Modal>
    )
}