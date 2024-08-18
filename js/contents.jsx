import Back from '../pages/back/Back'
import Front from '../pages/front/Front'

import './content.css'

const Content = ({data}) => {

      if(data.length === 0) return 

      return (
            <div className="content">
                  <Back data={data} />
                  <Front data={data} />
            </div>
      )
}

export default Content
