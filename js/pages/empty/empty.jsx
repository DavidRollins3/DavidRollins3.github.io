import { RiGhost2Fill } from 'react-icons/ri'
import './empty.css'

const Empty = ({text}) => {
  
      return (
            <div className="empty_content">
                  <RiGhost2Fill />

                  <h3>{text}</h3>
            </div>
      )
}

export default Empty
