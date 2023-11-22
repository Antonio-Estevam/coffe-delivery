import { CoffeCardContainer, Buy } from './styles'
import { ShoppingCart } from '@phosphor-icons/react'
import { useState, useEffect } from 'react'

interface Coffe {
  typeCoffe: string[]
  title: string
  price: number
  description: string
  thumbnailNameFile: string
}
export function CoffeCard(props: Coffe) {
  const [ImgThumbnail, setImgThumbnail] = useState<string | undefined>(
    undefined,
  )

  useEffect(() => {
    const importImage = async function () {
      try {
        const imagem = await import(
          `../../../../assets/coffeImage/${props.thumbnailNameFile}`
        )
        setImgThumbnail(imagem.default)
      } catch {
        setImgThumbnail(undefined)
      }
    }
    importImage()
  }, [])

  return (
    <CoffeCardContainer>
      <img src={ImgThumbnail} alt={props.title} title={props.title} />
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
          <ShoppingCart size={20} weight="fill" />
        </button>
      </Buy>
    </CoffeCardContainer>
  )
}
