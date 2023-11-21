import {
  BannerHome,
  CoffeeList,
  HomeContainer,
  ItemsGroup,
  List,
} from './styles'
import Imagem from '../../assets/Imagem.svg'
import { ShoppingCart, Package, Timer, Coffee } from '@phosphor-icons/react'
import { CoffeCard } from './components/CoffeCard'

export function Home() {
  return (
    <HomeContainer>
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
          <CoffeCard
            typeCoffe={['Tradicional', 'gelado']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeCard
            typeCoffe={['Tradicional']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeCard
            typeCoffe={['Tradicional', 'gelado']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeCard
            typeCoffe={['Tradicional', 'gelado']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeCard
            typeCoffe={['Tradicional', 'gelado']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeCard
            typeCoffe={['Tradicional', 'gelado']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeCard
            typeCoffe={['Tradicional', 'gelado']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
          <CoffeCard
            typeCoffe={['Tradicional', 'gelado']}
            title="Expresso Tradicional"
            price={9.9}
            description="O tradicional café feito com água quente e grãos moídos"
          />
        </List>
      </CoffeeList>
    </HomeContainer>
  )
}
