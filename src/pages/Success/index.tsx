import { SuccessContainer } from './styles'
import Illustration from '../../assets/Illustration.svg'
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <h2>Agora é só aguardar que logo o café chegará até você</h2>
      <div>
        <div>
          <div>
            <MapPin size={16} weight="fill" />
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Farrapos - Porto Alegre, RS</span>
            </div>
          </div>

          <div>
            <Timer size={16} weight="fill" />
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Previsão de entrega</span>
            </div>
          </div>

          <div>
            <CurrencyDollar size={16} />
            <div>
              <p>
                Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
              </p>
              <span>Cartão de Crédito</span>
            </div>
          </div>
        </div>
        <img src={Illustration} alt="Illustration" />
      </div>
    </SuccessContainer>
  )
}
