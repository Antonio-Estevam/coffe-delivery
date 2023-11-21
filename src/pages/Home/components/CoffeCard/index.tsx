import { CoffeCardContainer, Buy } from './styles'
import CafeExpresso from '../../../../assets/Expresso.png'
import { ShoppingCart } from '@phosphor-icons/react'

interface Coffe {
  typeCoffe: string[]
  title: string
  price: number
  description: string
}

export function CoffeCard(props: Coffe) {
  return (
    <CoffeCardContainer>
      <img src={CafeExpresso} alt={props.title} title={props.title} />
      <div className="coffeTypeGroup">
        {props.typeCoffe.map((type) => {
          return (
            <span key={type} className="coffeType">
              {type}
            </span>
          )
        })}
      </div>
      <h3>{props.title}</h3>
      <p className="description">{props.description}</p>
      <Buy>
        <div className="price">
          R$
          <span>{props.price.toFixed(2)}</span>
        </div>
        <input type="number" max={999} min={1} />
        <button type="button">
          <ShoppingCart size={18} weight="fill" />
        </button>
      </Buy>
    </CoffeCardContainer>
  )
}
