import PicPath from './profile.jpeg'
import './picture.css'
export default function picture(){

    return(
        <div className='picture-container'>
            <img src={PicPath} className='picture'/>
        </div>
    )
}
