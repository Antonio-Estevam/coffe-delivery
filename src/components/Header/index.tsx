import { useContext } from 'react'
import { CartContext } from '../../contexts/CartProvider'
import { Link } from 'react-router-dom'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import {
  HeaderContainer,
  Nav,
  IconContainer,
  ActionContainer,
  CurrentLocation,
  CartLinkContainer,
} from './styles'
import Logo from './../../assets/Logo.svg'

export function Header() {
  const { items } = useContext(CartContext)
  return (
    <HeaderContainer>
      <Nav>
        <IconContainer>
          <Link to={'/'}>
            <img src={Logo} alt="Coffe Delivery" />
          </Link>
        </IconContainer>
        <ActionContainer>
          <CurrentLocation>
            <MapPin size={24} weight="fill" />
            <span>Porto Alegre,RS</span>
          </CurrentLocation>
          <CartLinkContainer quantityproducts={items.length}>
            <Link to={'/checkout'}>
              <ShoppingCart size={24} weight="fill" />
            </Link>
          </CartLinkContainer>
        </ActionContainer>
      </Nav>
    </HeaderContainer>
  )
}
