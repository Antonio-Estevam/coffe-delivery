import { CoffeCardContainer, Buy, Thumbnail } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useState, useContext } from 'react'
import { CartContext } from '../../../../contexts/CartProvider'

interface Coffe {
  id: number
  typeCoffe: string[]
  title: string
  price: number
  description: string
  thumbnailUrl: string
  availableQuantity: number
}
export function CoffeCard(props: Coffe) {
  const [quantity, setQuantity] = useState(1)

  const { items, updateCart } = useContext(CartContext)

  function addItem(item: any): void {
    const filtredItem = items.find((itemFind) => itemFind.id === item.id)

    if (filtredItem) {
      const newFilterItem = items.filter((itemFind) => itemFind.id !== item.id)
      updateCart([
        ...newFilterItem,
        {
          ...item,
          itemQuantity: filtredItem.itemQuantity + item.itemQuantity,
        },
      ])
    } else {
      updateCart([...items, item])
    }
  }
  function handleAvailableQuantity(
    event: React.ChangeEvent<HTMLInputElement>,
    availableQuantity: number,
  ) {
    event.preventDefault()
    if (Number(event.target.value) > availableQuantity) {
      alert(`Temos apenas ${availableQuantity} disponível para pedidos!`)
    } else {
      setQuantity(Number(event.target.value))
    }
  }

  return (
    <CoffeCardContainer>
      <Thumbnail
        src={props.thumbnailUrl}
        alt={props.title}
        title={props.title}
      />
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
        <input
          type="number"
          max={999}
          min={0}
          value={quantity}
          onChange={(e) => {
            handleAvailableQuantity(e, props.availableQuantity)
          }}
        />
        <button
          type="button"
          onClick={() =>
            addItem({
              id: props.id,
              thumbnailUrl: props.thumbnailUrl,
              title: props.title,
              price: props.price,
              itemQuantity: quantity,
            })
          }
        >
          <ShoppingCart size={20} weight="fill" />
        </button>
      </Buy>
    </CoffeCardContainer>
  )
}
