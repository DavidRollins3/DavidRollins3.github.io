import './video.css'

const VideoContent = ({videos}) => {

      return (
            <div className="wrapper_video">
                  <h3>{videos[0].title}</h3>
                  <div className="video_box">
                        <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${videos[0].id_video}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                  </div>
            </div>
      )
}

export default VideoContent
