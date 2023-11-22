import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { CheckoutContainer } from './styles'

export function Checkout() {
  return (
    <CheckoutContainer>
      <form action="#">
        <div className="clientInformation">
          <h2>Complete seu pedido</h2>
          <div className="address">
            <div className="title">
              <MapPinLine size={24} color="#c47f17" />
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
            <input type="number" name="" id="" placeholder="CEP" />
            <input type="number" name="" id="" placeholder="CEP" />
            <div>
              <input type="number" name="" id="" placeholder="Número" />
              <input type="text" name="" id="" placeholder="Complemento" />
            </div>
            <div>
              <input type="text" name="" id="" placeholder="Bairro" />
              <input type="text" name="" id="" placeholder="Cidade" />
              <input type="text" name="" id="" placeholder="UF" />
            </div>
          </div>
          <div className="paymentMethod">
            <div className="title">
              <CurrencyDollar size={32} weight="light" color="#8047F8" />
              <h3>Endereço de Entrega</h3>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>
        </div>
        <div className="OrderDetails">
          <h2>Cafés selecionados</h2>
        </div>
      </form>
    </CheckoutContainer>
  )
}
