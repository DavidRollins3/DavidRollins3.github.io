import './buttons.css'

const Social = ({link, icon}) => {

      if(link === '') return 

      return (
            <a className="btn_social" href={link} target="_blank" rel="noreferrer">{icon}</a>
      )
}

export default Social
