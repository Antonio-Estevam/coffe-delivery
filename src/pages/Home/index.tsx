import {
  BannerHome,
  CoffeeList,
  HomeContainer,
  ItemsGroup,
  List,
} from './styles'
import Imagem from '../../assets/Imagem.svg'
import Background from '../../assets/Background.png'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { CoffeCard } from './components/CoffeCard'
import { coffes } from '../../utils/coffesArray'

export function Home() {
  return (
    <HomeContainer>
      <img src={Background} alt="" />
      <BannerHome>
        <div className="left">
          <div>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h2>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h2>
            <ItemsGroup>
              <div>
                <ShoppingCart size={16} weight="fill" />
                Compra simples e segura
              </div>
              <div>
                <Package size={16} weight="fill" />
                Embalagem mantém o café intacto
              </div>
              <div>
                <Timer size={16} weight="fill" />
                Entrega rápida e rastreada
              </div>
              <div>
                <Coffee size={16} weight="fill" />O café chega fresquinho até
                você
              </div>
            </ItemsGroup>
          </div>
        </div>
        <img src={Imagem} alt="" sizes="29.75rem" />
      </BannerHome>

      <CoffeeList>
        <h1>Nossos cafés</h1>
        <List>
          {coffes.map((coffe) => {
            return (
              <CoffeCard
                key={coffe.id}
                thumbnailNameFile={coffe.thumbnailNameFile}
                typeCoffe={coffe.typeCoffe}
                title={coffe.title}
                price={coffe.price}
                description={coffe.description}
              />
            )
          })}
        </List>
      </CoffeeList>
    </HomeContainer>
  )
}
