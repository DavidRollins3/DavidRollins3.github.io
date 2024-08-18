import Close from '../../components/buttons/Close'
import Empty from '../empty/Empty'
import VideoContent from './VideoContent'

import './video.css'

const Video = ({isVideo, isSetVideo, isClose, videos}) => {

      if(!isVideo) return 
      
      return (
            <div className={isVideo ? "pager_content video" : "pager_content"}>
                  <Close close={isClose} />
                  <div className="pager_inner">
                        {
                              (videos.data)
                                    ?
                                          <Empty text={"Oops! Video Not Found"}/>
                                    :     <VideoContent videos={videos} />
                        }
                        
                        
                  </div>
            </div>
      )
}

export default Video
