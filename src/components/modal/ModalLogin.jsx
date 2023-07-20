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
        <Modal.Header closeButton>
          <Modal.Title>{currentForm.toUpperCase()}</Modal.Title>
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
