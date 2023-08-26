import React from 'react'

export default function Moviescomponent(props) {
  return (
    <>
     <div className="cards" >
                <div className="card" style={{width:'15rem'}}>
                    <img src={props.img} className="card_image" alt='' />
                    <div className="card_info">
                        <span className="card_category"></span>
                        <h3 className="card_title">{props.title}</h3>
                        <a href={props.link}>
                            <button className="button" style={{marginLeft:'0.85rem'}}>Watch Now</button>
                        </a>
                    </div>
                </div>
                </div>
              
    </>
  )
}
