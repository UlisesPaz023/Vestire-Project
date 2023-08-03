import { React, useEffect } from 'react'
import Card from '../card/Card'
import Pagination from '../pagination/Pagination'
import { useState } from 'react'
import useScreenSize from '../../hooks/useScreenSize'

const ProductGrid = ({ productsToShow, gridTitle }) => {
  const { width } = useScreenSize()
  let items
  useEffect(() => {
    if (width >= 992) setProductsPerPage(15)
    if (width < 992) setProductsPerPage(12)
    if (width < 767) setProductsPerPage(10)
  }, [width])

  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage, setProductsPerPage] = useState(items)
  const totalProducts = productsToShow.length
  const lastIndex = productsPerPage * currentPage
  const firstIndex = lastIndex - productsPerPage
  return (
    <div className="container-fluid">
      <section>
        <div className="row justify-content-center">
          <div className="p-0">
            <h2
              className={`fs-2  text-center col mx-3 my-4 pb-1 border-bottom`}
            >
              {gridTitle}
            </h2>
          </div>
          {productsToShow
            .map((product) => (
              <Card
                product={product}
                quantity={productsToShow.length}
                key={product._id}
              />
            ))
            .slice(firstIndex, lastIndex)}
        </div>
      </section>
      {gridTitle !== 'Su búsqueda no produjo resultados' ? (
        <Pagination
          totalProducts={totalProducts}
          productsPerPage={productsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ) : (
        <br />
      )}
    </div>
  )
}

export default ProductGrid
