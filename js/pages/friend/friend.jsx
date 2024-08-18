import Close from '../../components/buttons/Close'
import Empty from '../empty/Empty'
import FriendContent from './FriendContent'
import './friend.css'

const Friend = ({isFriend, isClose, friends}) => {

      if(!isFriend) return 

      return (
            <div className={isFriend ? "pager_content friend" : "pager_content"}>
                  <Close close={isClose} />
                  <div className="pager_inner">
                        {
                              (friends.data)
                                    ?
                                          <Empty text={"Oops! Friends Not Found"}/>
                                    :     <FriendContent friends={friends} />
                        }
                        
                        
                  </div>
            </div>
      )
}

export default Friend
