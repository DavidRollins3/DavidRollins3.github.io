
import { RxZoomIn } from 'react-icons/rx'
import './gallery.css'

const GalleryContent = ({galleries, isSetModal, isSetObj}) => {

      const openModal = (item) => {
            isSetObj(item)
            isSetModal(true)
      }
      
      return (
            <div className="wrapper_gallery">
                  {
                        galleries?.map((item, index) => (
                              <div className="card_photo" key={index}>
                                    <img src={item.image} alt={item.description} />
                                    <button className="open_modal" onClick={() => openModal(item)}><RxZoomIn /></button>
                              </div>
                        ))
                  }
                  
            </div>
      )
}

export default GalleryContent
