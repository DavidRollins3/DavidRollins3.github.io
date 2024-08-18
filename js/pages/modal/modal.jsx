import { IoMdClose } from 'react-icons/io';
import './modal.css';

const Modal = ({isModal, isSetModal, isObj}) => {

      if(!isModal) return;
      

      const closeModal = () => {
            isSetModal(false);
      }

      return (
            <div className={(isModal) ? "modal show" : "modal"}>
                  <button className="btn_close__modal" onClick={() => closeModal()}><IoMdClose /></button>
                  <div className={(isModal) ? "inner_modal show" : "inner_modal"}>
                        <img src={isObj.image} alt={isObj.description} />
                  </div>
            </div>
      )
}

export default Modal;
