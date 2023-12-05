import { createContext, useState, ReactNode } from 'react'

type Item = {
  id: number
  thumbnailUrl: string
  title: string
  price: number
  itemQuantity: number
}

interface CartContextType {
  items: Item[]
  updateCart: (item: Item[]) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [items, setItems] = useState<Item[]>([
    {
      id: 1,
      thumbnailUrl: 'src/assets/coffeImage/Expresso-tradicional.png',
      title: 'Expresso Tradicional',
      price: 9.9,
      itemQuantity: 1,
    },
    {
      id: 2,
      thumbnailUrl: 'src/assets/coffeImage/Expresso-tradicional.png',
      title: 'Expresso Tradicional',
      price: 9.9,
      itemQuantity: 1,
    },
    {
      id: 3,
      thumbnailUrl: 'src/assets/coffeImage/Expresso-tradicional.png',
      title: 'Expresso Tradicional',
      price: 9.9,
      itemQuantity: 1,
    },
  ])

  function updateCart(item: Item[]) {
    setItems(item)
  }

  return (
    <CartContext.Provider
      value={{
        items,
        updateCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
