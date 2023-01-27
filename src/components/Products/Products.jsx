import React from 'react'
import css from './Products.module.css'
import Plane from '../../assets/plane.png'
import {ProductsData} from '../../data/product'
import { useState } from 'react'
// import { type } from '@testing-library/user-event/dist/type'
import { useAutoAnimate } from '@formkit/auto-animate/react'

const Products = () => {

    const [parent] = useAutoAnimate()

    const [menuProduct, setMenuProduct] = useState(ProductsData);

    const filter = (type) =>{
        setMenuProduct(ProductsData.filter((product)=>product.type === type))
    }

    return (
        <div className={css.container}>
            <img src={Plane} alt="plane"/>
            <h1>Nuestros productos destacados</h1>
            <div className={css.products}>
                <ul className={css.menu}>
                    <li onClick={()=>setMenuProduct(ProductsData)}>Todo</li>
                    <li onClick={()=>filter("skin care")}>Skin Care</li>
                    <li onClick={()=>filter("conditioner")}>Acondicionadores</li>
                    <li onClick={()=>filter("foundation")}>Bases</li>
                </ul>

                <div className={css.list} ref={parent}>
                    {
                        menuProduct.map((product, i) => (
                            <div className={css.product}>
                                <div className="left-s">
                                    <div className="name">
                                        <span>{product.name}</span>
                                        <span>{product.detail}</span>
                                    </div>
                                    <span>{product.price}$</span>
                                    <div>Compra ahora</div>
                                </div>
                                <img src={product.img} alt="ima-product" className='img-p'/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Products