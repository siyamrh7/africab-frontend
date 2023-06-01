import Modal from 'react-modal';
import React, { useEffect } from 'react';
import CreateQuestion from './CreateQuestion';
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width:"40%",
    height:"700px"

  },
};




function CommunityModal({openModal,setIsOpen,modalIsOpen,setAns,answer}) {
    let subtitle;
  
    function afterOpenModal() {
      // references are now sync'd and can be accessed.
      subtitle.style.color = '#f00';
    }
  
    function closeModal() {
      setAns(null)
      setIsOpen(false);
    }
  useEffect(()=>{
if(answer){
  setIsOpen(true)
}
  },[answer])
    return (
      <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="comModal"
        >
          <button onClick={closeModal} style={{border:"none",cursor:"pointer",zIndex:1,position:"absolute",right:"20px",top:"10px"}}> &#x2715; </button>
         <CreateQuestion answer={answer}/>
        </Modal>
      </div>
    );
  }

  export default CommunityModal;
