import { useContext } from 'react'
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react'
import {
  CheckoutContainer,
  InputsAddressGroup,
  CoffeCard,
  PayMethod,
  CoffesList,
  Coffe,
  OrderSummary,
} from './styles'
import { CartContext } from '../../contexts/CartProvider'

export function Checkout() {
  const { items, updateCart } = useContext(CartContext)

  function removeItem(id: number): void {
    const filtredItems = items.filter((item) => item.id !== id)
    updateCart(filtredItems)
  }

  return (
    <CheckoutContainer>
      <form action="#">
        <div className="clientInformation">
          <h2>Complete seu pedido</h2>
          <CoffeCard>
            <div className="title">
              <MapPinLine size={22} color="#c47f17" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <InputsAddressGroup>
              <input type="number" name="" id="" placeholder="CEP" />
              <input type="text" name="" id="" placeholder="RUA" />
              <div>
                <input type="number" name="" id="" placeholder="Número" />
                <input type="text" name="" id="" placeholder="Complemento" />
              </div>
              <div>
                <input type="text" name="" id="" placeholder="Bairro" />
                <input type="text" name="" id="" placeholder="Cidade" />
                <input type="text" name="" id="" placeholder="UF" />
              </div>
            </InputsAddressGroup>
          </CoffeCard>
          <CoffeCard>
            <div className="title">
              <CurrencyDollar size={22} weight="light" color="#8047F8" />
              <div>
                <h3>Endereço de Entrega</h3>
                <p>Informe o endereço onde deseja receber seu pedido</p>
              </div>
            </div>
            <PayMethod>
              <input type="checkbox" name="cartaoCredito" id="cartaoCredito" />
              <label htmlFor="cartaoCredito">
                <CreditCard size={16} weight="light" color="#8047F8" />
                Cartão de crédito
              </label>

              <input type="checkbox" name="cartaoDebito" id="cartaoDebito" />
              <label htmlFor="cartaoDebito">
                <Bank size={16} weight="light" color="#8047F8" />
                Cartão de débito
              </label>

              <input type="checkbox" name="dinheiro" id="dinheiro" />
              <label htmlFor="dinheiro">
                <Money size={16} weight="light" color="#8047F8" />
                Dinheiro
              </label>
            </PayMethod>
          </CoffeCard>
        </div>
        <div className="OrderDetails">
          <h2>Cafés selecionados</h2>

          <CoffeCard>
            <CoffesList>
              {items.map((item) => {
                return (
                  <Coffe key={item.id}>
                    <img src={item.thumbnailUrl} alt={item.title} />
                    <div>
                      <p>{item.title}</p>
                      <div>
                        <input
                          type="number"
                          name=""
                          id=""
                          value={item.itemQuantity}
                        />
                        <button onClick={() => removeItem(item.id)}>
                          <Trash size={16} color="#8047f8" />
                          Remover
                        </button>
                      </div>
                    </div>
                    <span>R$ {item.price.toFixed(2)}</span>
                  </Coffe>
                )
              })}
            </CoffesList>
            <OrderSummary>
              <div>
                <p>Total de itens</p>
                <p>R$ 29,70</p>
              </div>
              <div>
                <p>Entrega</p>
                <p>R$ 3,50</p>
              </div>
              <div>
                <p>Total</p>
                <p>R$ 33,20</p>
              </div>
              <button type="submit">confirmar pedido</button>
            </OrderSummary>
          </CoffeCard>
        </div>
      </form>
    </CheckoutContainer>
  )
}
