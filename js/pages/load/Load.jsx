import { BiLoaderCircle } from 'react-icons/bi';

import './load.css';

const Load = ({load}) => {

      if(load.length !== 0) return;
      
      return (
            <div className="load_content">
                  <div className="load_inner">
                        <div className="load_circle">
                              <BiLoaderCircle />
                        </div>
                        <span>Loading...</span>
                  </div>
            </div>
      )
}

export default Load;
