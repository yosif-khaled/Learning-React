import { useState, useContext } from 'react'
import { Button, Navbar, Modal } from 'react-bootstrap'
import { CartContext } from '../Context/CartContext'
import CartProduct from './CartProduct'
const NavbarComponent = () => {

  const cart = useContext(CartContext)

  const [show, setShow] = useState(false)
  const handleClose = () => {
    setShow(false)
  }
  const handleShow = () => {
    setShow(true)
  }

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0)

  return (
    <>
      <Navbar expand="sm">
        <Navbar.Brand href="/"></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end'>
          <Button onClick={handleShow}>Cart ({productsCount})Items</Button>
        </Navbar.Collapse>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {productsCount > 0 ?
            <>
              <p>
                Items In Your Cart
              </p>
              {
                cart.items.map(
                  (currentProduct, idx)=>(
                    <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity}/>
                  )
                )
              }
              <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>
              <Button variant='success'>
                Purchase Items
              </Button>
            </> : <h1>There are NO ITEMS in your cart</h1>
            
          }
        </Modal.Body>
      </Modal>
    </>
  )
}

export default NavbarComponent