import React from 'react'
import { newArrivals } from '../../data/newArrivals'
import Heading from '../Common/Heading/Heading'
import ProductCard from '../Common/ProductCard/ProductCard'

const Featured = () => {
  return (
    <>
      <Heading
        title="New Arrivals"
        description="All the latest picked from designer of our store"
      />
      <div className="product-center">
        {newArrivals.map((product: IProduct) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <hr />
    </>
  )
}

export default Featured
