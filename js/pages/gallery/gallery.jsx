import Close from '../../components/buttons/Close'
import Empty from '../empty/Empty'
import GalleryContent from './GalleryContent'

import './gallery.css'

const Gallery = ({isGallery, isClose, galleries, isSetModal, isSetObj}) => {

      if(!isGallery) return 
      
      return (
            <div className={isGallery ? "pager_content gallery" : "pager_content"}>
                  <Close close={isClose} />
                  <div className="pager_inner">
                        {
                              (galleries.data)
                                    ?
                                          <Empty text={"Oops! Photos Not Found"}/>
                                    :     <GalleryContent galleries={galleries} isSetModal={isSetModal} isSetObj={isSetObj} />
                        }
                        
                        
                  </div>
            </div>
      )
}

export default Gallery
