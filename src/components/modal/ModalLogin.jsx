import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal'
import Login from '../../pages/Login'
import Register from '../../pages/Register'

const ModalLogin = ({ show, handleClose }) => {
  const [currentForm, setCurruentForm] = useState('login')

  const toggleForm = (nameForm) => {
    setCurruentForm(nameForm)
  }
  useEffect(() => {
    setCurruentForm('login')
  }, [show])

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='position-relative'>
          <Modal.Title className='position-absolute'>
          </Modal.Title>
            <h3 className='my-1 w-100 text-center'>
              {currentForm.toUpperCase()}
            </h3>
        </Modal.Header>
        <Modal.Body className="p-0">
          {currentForm === 'login' ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Register onFormSwitch={toggleForm} />
          )}
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ModalLogin
