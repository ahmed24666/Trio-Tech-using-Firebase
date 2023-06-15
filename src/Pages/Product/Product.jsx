import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../../Component/Products'

import "./product.scss";

const Product = () => {
  const { Id } = useParams()
  const choosen = products.find((item) => item.id == Id)
  const [pic, setpic] = useState(choosen.img)
  return (
    <div className='Products'>
      <div className="slider">
        <div className="big">
          <div className="text">
            <h1>{choosen.name}</h1>
            <p>{choosen.p}</p>
          </div>
          <div className="imageB">
            <img src={pic} alt="" />
          </div>
        </div>
        <div className="small">
          <div className="imageS" >
            <img src={products[0].img} alt="" onClick={(e)=>setpic(e.target.src)} />
          </div>
          <div className="imageS">
            <img src={products[1].img} alt="" onClick={(e)=>setpic(e.target.src)}/>
          </div>
          <div className="imageS">
            <img src={products[2].img} alt="" onClick={(e)=>setpic(e.target.src)}/>
          </div>
          <div className="imageS">
            <img src={products[3].img} alt="" onClick={(e)=>setpic(e.target.src)}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
