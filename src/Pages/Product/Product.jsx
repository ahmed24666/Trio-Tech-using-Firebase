import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./product.scss";
import { db } from '../../firebase.config';
import { doc, getDoc } from 'firebase/firestore';
import { useMyContext } from '../../context/MyContext';

const Product = () => {
  const { lang } = useMyContext()
  const { Id } = useParams()
  const [product, setproduct] = useState({})
  const [loading, setloading] = useState(false)
  const [pic, setpic] = useState('')
  const docRef = doc(db, "projects", Id);
  useEffect(() => {
    setloading(true)
    const getProduct = async () => {
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setproduct(docSnap.data())
        setpic(docSnap.data().img2)
        setTimeout(() => {
          
          setloading(false)
        }, 1500);
      } else {
        console.log("No such document!");
        setloading(false)
      }

    }
    getProduct()

  }, [])

  return (
    <div className='Products' style={lang === 'ar' ? { direction: 'ltr' } : { direction: 'rtl' }}>
      {loading ?
      <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'calc(100vh - 400px)'}}>

        <div class="loader2"></div>
      </div>
        :

        <div className="slider">
          <div className="big">
            <div className="text">
              <h1>{lang==='ar'?product.Name:product.arName}</h1>
              <p>{lang==='ar'?product.desc:product.arDesc}</p>
            </div>
            <div className="imageB">
              <img src={pic} alt="" />
            </div>
          </div>
          <div className="small">
            <div className="imageS" >
              <img src={product.img2} alt="" onClick={(e) => setpic(e.target.src)} />
            </div>
            <div className="imageS">
              <img src={product.img3} alt="" onClick={(e) => setpic(e.target.src)} />
            </div>
            <div className="imageS">
              <img src={product.img4} alt="" onClick={(e) => setpic(e.target.src)} />
            </div>
            <div className="imageS">
              <img src={product.img5} alt="" onClick={(e) => setpic(e.target.src)} />
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default Product
