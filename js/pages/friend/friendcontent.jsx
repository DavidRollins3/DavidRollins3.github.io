import './friend.css'

const FriendContent = ({friends}) => {

      return (
            <div className="wrapper_friends">
                  {
                        friends?.map((item, index) => (
                              <div className="friend_card" key={index}>
                                    <a href={item.me} target="_blank" rel="noreferrer" data-tooltip={item.name}>
                                          <img src={item.avatar} alt={item.name} />
                                    </a>
                              </div>
                        ))
                  }
                  
            </div>
      )
}

export default FriendContent
