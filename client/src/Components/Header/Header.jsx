import React from 'react'
import './header.css'
import {BsFillPencilFill,BsFillEraserFill,BsCircle,BsSquare,BsSlashLg} from 'react-icons/bs'
import {BiText} from 'react-icons/bi'
import {AiOutlineClear,AiOutlineZoomIn,AiOutlineZoomOut,AiOutlineBgColors,AiOutlineFontColors} from 'react-icons/ai'
import {MdRemoveDone} from 'react-icons/md'

const Header = ({onAddCircle,onAddRectangle,onAddLine,onDeleteSelected,onDeleteAll,onZoomIn,onZoomOut,setStrokeColor,onSetStrokeColor,onSetFillColor}) => {
    const colors = [
        'aqua', 'black', 'blue', 'fuchsia', 'green', 'navy', 'purple', 'red', 'white','yellow'
    ]
    

  return (
    <div>
        <div className="tools">
  <ul>
     
      <li onClick={onAddLine}><a>line</a><BsSlashLg size={32} color="white"/></li>
      <li onClick={onAddCircle}><a>Circle</a><BsCircle size={32} color="white"/></li>
      <li onClick={onAddRectangle}><a>rectangle</a><BsSquare size={32} color="white"/></li>
      <li onClick={onDeleteAll}><a>delete all</a><AiOutlineClear size={32} color="white"/></li>
      <li onClick={onDeleteSelected}><a>delete<br/>selected</a><MdRemoveDone size={32} color="white"/></li>
      <li onClick={onZoomIn}><a>zoom in</a><AiOutlineZoomIn size={32} color="white"/></li>
      <li onClick={onZoomOut}><a>zoom out</a><AiOutlineZoomOut size={32} color="white"/></li>
      <li onClick={onSetFillColor}><a>Fill Color</a><AiOutlineBgColors size={32} color="white"/></li>
      <li onClick={onSetStrokeColor}><a>stroke <br/>color</a><AiOutlineFontColors size={32} color="white"/></li>
      </ul>
</div>

<div className="color-box" >
  {
    colors.map(item=>(
        <div className="colorselection" onClick={()=>setStrokeColor(item)} key={item} style={{backgroundColor:`${item}`,width:'50px',height:'50px',border:'3px solid white', margin:'5px 0',borderRadius:'5px'}} >
           <label htmlFor="radio1"><input id='radio1' name='testradios' type='radio'/></label>
        </div>
    ))
  }
</div>
    </div>
  )
}

export default Header