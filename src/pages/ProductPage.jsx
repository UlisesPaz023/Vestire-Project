import { React, useState, useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import styles from '../pages/productPage.module.css'
import './styles/productPage.css'
import Swal from 'sweetalert2'
import Toast from '../components/toast/ToastButtonCart'

const ProductPage = ({ productsToCart, setProductsToCart }) => {
  const location = useLocation()
  const {
    _id,
    marca,
    descripcion,
    resumenDescripcion,
    imagen,
    precio,
    color,
    cantidadPorTalle,
    categoria,
    subCategoria,
  } = location.state
  const [talle, setTalle] = useState('')
  const [cantidad, setCantidad] = useState(0)
  const resumenDescripcionToCart = resumenDescripcion
    .split(' ')
    .map((palabra) => {
      return palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    })
    .join(' ')

  const initProductToCart = {
    _id,
    imagen,
    resumenDescripcionToCart,
    precio,
    talle: talle,
    cantidad: cantidad,
  }
  const { xs, s, m, l, xl } = cantidadPorTalle

  let sizeArray = []
  if (xs !== 0) sizeArray.push('xS')
  if (s !== 0) sizeArray.push('S')
  if (m !== 0) sizeArray.push('M')
  if (l !== 0) sizeArray.push('L')
  if (xl !== 0) sizeArray.push('xL')

  const [array, setArray] = useState([])

  const [showToast, setShowToast] = useState(false)

  const [disableCartButton, setDisableCartButton] = useState(false)

  const [addLocalStorage, setAddLocalStorage] = useState(false)

  const handleChangeSize = (e) => {
    setTalle(e.target.value.toLowerCase())
  }

  const handleChangeQuantity = (e) => {
    setCantidad(parseInt(e.target.value))
    setDisableCartButton(true)
  }

  useEffect(() => {
    setArray([])
    for (let i = 1; i <= cantidadPorTalle[talle]; i++) {
      setArray((prev) => [...prev, i])
    }
  }, [talle])

  const handleShowToast = () => {
    if (!disableCartButton) setShowToast(!showToast)
  }

  const hanldeAddToCart = () => {
    if (
      productsToCart.find((item) => item.talle === talle && item._id === _id)
    ) {
      const products = productsToCart.map((item) =>
        item.talle === talle
          ? { ...item, cantidad: item.cantidad + cantidad }
          : item
      )
      return (
        setProductsToCart([...products]),
        setAddLocalStorage(true),
        Swal.fire({
          icon: 'success',
          title: 'Producto añadido con exito.',
          showConfirmButton: false,
          timer: 1500,
        })
      )
    }
    setProductsToCart((prevState) => [...prevState, initProductToCart])
    setAddLocalStorage(true)
    Swal.fire({
      icon: 'success',
      title: 'Producto añadido con exito.',
      showConfirmButton: false,
      timer: 1500,
    })
  }

  useEffect(() => {
    setAddLocalStorage(false)
  }, [productsToCart])

  useEffect(() => {
    if (addLocalStorage === true)
      localStorage.setItem('cart', JSON.stringify(productsToCart))
  }, [addLocalStorage])

  useEffect(() => {
    window.scrollTo(0, 0)
    if (localStorage.getItem('cart')) {
      const cartOnLocalStorage = JSON.parse(localStorage.getItem('cart'))
      setProductsToCart(cartOnLocalStorage)
    }
  }, [])

  return (
    <>
      <div className="container bg-warning  my-5 pt-1">
        <div className={`${styles.desc} row p-0 `}>
          <div className="col">
            {categoria} / {subCategoria} / {resumenDescripcion}
          </div>
        </div>
        <div className="row m-0">
          <div className="m-0 pb-2 col-6">
            <img className="img-fluid" src={imagen} alt={resumenDescripcion} />
          </div>
          <div className="col-6 py-0 px-2">
            <div className={`${styles.desContainer} pb-3 mb-4`}>
              <p className="fw-bold">
                {resumenDescripcion.toUpperCase()} | Marca: {marca}
              </p>
              <p className={`${styles.desc}`}>{descripcion}</p>
              <h3 className="fw-bold">${precio.toLocaleString()}</h3>
            </div>
            <div className={`${styles.desContainer} pb-4 mb-4`}>
              <div className="d-flex align-items-center">
                <p className={`${styles.desc} m-0 me-1`}>Color:</p>

                <p className={`${styles.desc} m-0`}>{color.toUpperCase()}</p>
              </div>

              <div className="row">
                <div className="col-10 col-sm-8 col-md-8 col-lg-6  d-flex flex-row justify-content-start align-items-center">
                  <p
                    className={`${styles.desc} fw-bold mt-3`}
                    style={{ display: 'inline' }}
                  >
                    Talle:
                  </p>
                  {sizeArray && (
                    <select
                      className="form-select form-select-sm ms-1"
                      aria-label="Default select example"
                      onChange={handleChangeSize}
                      style={{
                        height: '30px',
                        backgroundColor: 'black',
                        color: 'white',
                      }}
                    >
                      <option defaultValue={'Elija talle'}>Elija talle</option>
                      {sizeArray &&
                        sizeArray.map((el) => (
                          <option key={el} value={el}>
                            {el}
                          </option>
                        ))}
                    </select>
                  )}
                </div>
              </div>
              {talle && (
                <>
                  <div className="row">
                    <div className="col-10 col-sm-8 col-md-8 col-lg-6  d-flex flex-row justify-content-start align-items-center">
                      <p
                        className={`${styles.desc} fw-bold mt-3`}
                        style={{ display: 'inline' }}
                      >
                        Cantidad:
                      </p>
                      <select
                        className="form-select form-select-sm ms-1"
                        aria-label="Default select example"
                        onChange={handleChangeQuantity}
                        style={{
                          height: '30px',
                          backgroundColor: 'black',
                          color: 'white',
                        }}
                      >
                        <option defaultValue={'Elija cantidad'}>
                          Elija cantidad
                        </option>
                        {array &&
                          array.map((el) => (
                            <option key={el} value={el}>
                              {el}
                            </option>
                          ))}
                      </select>
                    </div>
                    <div className="row">
                      <p className="fw-bold">
                        ¡Quedan {array.length} unidades!
                      </p>
                    </div>
                  </div>
                </>
              )}

              <div className="mt-4 row ms-0 text-start">
                <div className="col-sm-6 ms-0 text-start p-0">
                  <div onClick={handleShowToast} className="text-start">
                    <button
                      className="border-0 bg-black text-white fw-bold py-2 btn"
                      onClick={hanldeAddToCart}
                      disabled={!disableCartButton}
                    >
                      <p className={`m-0 ${styles.button}`}>
                        AGREGAR AL CARRITO
                      </p>
                    </button>
                  </div>
                  {showToast ? (
                    <Toast showToast={showToast} setShowToast={setShowToast} />
                  ) : (
                    ''
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductPage
