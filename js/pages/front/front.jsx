import { useState } from 'react'
import { HiHome, HiChatAlt2, HiHeart } from 'react-icons/hi'
import { IoIosChatboxes, IoMdImages } from 'react-icons/io'
import { FaDiscord, FaFacebookF, FaInstagram, FaTiktok, FaTumblr, FaTwitter, FaUserFriends, FaYoutube } from 'react-icons/fa'
import { MdOutlineSlowMotionVideo } from 'react-icons/md'

import Social from '../../components/buttons/Social'
import Friend from '../friend/Friend'
import Video from '../video/Video'
import Gallery from '../gallery/Gallery'
import Modal from '../modal/Modal'
import Close from '../../components/buttons/Close'
import './front.css'

const Front = ({data}) => {

      const [pages, setPages] = useState(false)
      const [friend, setFriend] = useState(false)
      const [video, setVideo] = useState(false)
      const [gallery, setGallery] = useState(false)
      const [modal, setModal] = useState(false)
      const [obj, setObj] = useState([])
      const [relationship, setRelationship] = useState(false)
      const {infordata, banners, social, friends, galleries, relation, videos} = data.user 
      const BANNER_DEFAULT = "https://i.postimg.cc/08xg0Jgv/banner-bg.jpg" 

      const closePage = () => {
            setFriend(false)
            setVideo(false)
            setGallery(false)
            setPages(false)
      }

      const openFriend = () => {
            setFriend(true)
            setVideo(false)
            setGallery(false)
            setPages(true)
      }

      const openVideo = () => {
            setFriend(false)
            setVideo(true)
            setGallery(false)
            setPages(true)
      }

      const openGallery = () => {
            setFriend(false)
            setVideo(false)
            setGallery(true)
            setPages(true)
      }

      const openRelation = () => {
            setRelationship(true)
      }

      const closeRelation = () => {
            setRelationship(false)
      }

      return (
            <div className="front_content">
                  <div className="banner_front">
                        <div className="banner_front__img">
                              <img src={banners.data ? BANNER_DEFAULT : banners[0].image} alt={banners.data ? "Banner Default" : banners[0].title} />
                        </div>
                        <div className="banner_front__menu">
                              <a href={infordata.homepage || "https://xat.com"} target="_blank" rel="noreferrer" data-tooltip="Homepage"><HiHome /></a>
                              <a href={infordata.xat_room || "https://xat.com"} target="_blank" rel="noreferrer" data-tooltip="Xat Room"><HiChatAlt2 /></a>
                              <a href={infordata.forum || "https://xat.com"} target="_blank" rel="noreferrer" data-tooltip="Forum"><IoIosChatboxes /></a>
                        </div>
                  </div>
                  <div className="wrapper_user">
                        <div className="user_avatar">
                              <div className="user_avatar__img">
                                    <img src={infordata.avatar} alt={infordata.name} />
                              </div>
                              {
                                    (!relation.data)
                                          ?
                                                <button className="user_relation__btn" onClick={() => openRelation()}><HiHeart /></button>
                                          : ''
                              }
                              
                        </div>
                        <div className="user_content">
                              <div className="user_content__data">
                                    <h1 className="bg_grad">{infordata.name}</h1>
                                    <span>{infordata.status}</span>
                                    <div className="user_data__about">
                                          <p>{infordata.about}</p>
                                    </div>
                              </div>
                              <div className="user_content__social">
                                    <Social link={social.facebook || "https://www.facebook.com"} icon={<FaFacebookF/>} />
                                    <Social link={social.twitter || "https://www.twitter.com"} icon={<FaTwitter/>} />
                                    <Social link={social.instagram || "https://www.instagram.com"} icon={<FaInstagram/>} />
                                    <Social link={social.youtube || "https://www.youtube.com"} icon={<FaYoutube/>} />
                                    <Social link={social.tiktok || "https://www.titok.com"} icon={<FaTiktok/>} />
                                    <Social link={social.tumblr || "https://www.tumblr.com"} icon={<FaTumblr/>} />
                                    <Social link={social.discord || "https://www.discord.com"} icon={<FaDiscord/>} />
                              </div>
                              <div className="user_content__menu">
                                    <ul>
                                          <li onClick={() => openFriend()}><i><FaUserFriends/></i> Friends</li>
                                          <li onClick={() => openVideo()}><i><MdOutlineSlowMotionVideo/></i> Video</li>
                                          <li onClick={() => openGallery()}><i><IoMdImages/></i> Photos</li>
                                    </ul>
                              </div>
                        </div>
                  </div>
                  {
                        (relationship)
                              ?
                                    <div className={relationship ? "wrapper_relation show" : "wrapper_relation"}>
                                          <Close close={() => closeRelation()}/>
                                          <div className="relation_avatar">
                                                <img src={relation.avatar} alt={relation.name} />
                                          </div>
                                          <h3>{relation.name}</h3>
                                          <span>{relation.relation_type}</span>
                                          <div className="relation_about">
                                                <p>{relation.about}</p>
                                          </div>
                                          <a href={relation.me} target="_blank" rel="noreferrer">xat.me</a>
                                    </div>
                              : ''
                  }
                  
                  <div className={(pages) ? "pages show" : "pages"}>
                        <Friend isFriend={friend} isClose={() => closePage()} friends={friends}/>
                        <Video isVideo={video} isClose={() => closePage()} videos={videos}/>
                        <Gallery isGallery={gallery} isClose={() => closePage()} galleries={galleries} isSetModal={setModal} isSetObj={setObj}/>
                  </div>
                  <Modal isModal={modal} isSetModal={setModal} isObj={obj}/>
            </div>
      )
}

export default Front
