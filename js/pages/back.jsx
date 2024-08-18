import { useState, useEffect } from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import './back.css'

const Back = ({data}) => {

      const {infordata, banners} = data.user 
      const [online, setOnline] = useState([])
      const id_xat = infordata.id_xat
      const BANNER_DEFAULT = "https://i.postimg.cc/08xg0Jgv/banner-bg.jpg" 

      async function getOnline(id){
            try{
                  const response = await fetch(`https://oceanbot.net/online.php?id=${id}`)
                  const result = await response.json()
                  setOnline(result)
            }
            catch(err){
                  console.log('Error: ', err)
            }
      }

      useEffect(() => {
            getOnline(id_xat)
      }, [id_xat])

      return (
            <div className="back_content">
                  <div className="banner_content">
                        <div className="banner_content__img">
                              <img src={banners.data ? BANNER_DEFAULT : banners[0].image} alt={banners.data ? "Banner Default" : banners[0].title} />
                        </div>
                        <div className="banner_online">
                              <div className="online_avatar">
                                    <div className="online_avatar__img">
                                          <img src={infordata.avatar} alt={infordata.name} />
                                          <div className={online.status === 'online' ? "online_dots green" : "online_dots red"}></div>
                                    </div>
                              </div>
                              <span>{online.status === 'online' ? "Online Now" : "Offline"}</span>
                        </div>
                        <div className="banner_location">
                              <HiLocationMarker />
                              <span>{infordata.location}</span>
                        </div>
                  </div>
            </div>
      )
}

export default Back
