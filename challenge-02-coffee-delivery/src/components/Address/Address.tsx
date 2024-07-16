import { MapPin } from '@phosphor-icons/react'
import { AddressForm, AddressHeading, AddressContainer } from './styles'
import { AddressInput } from './components'

export const Address = () => {
  return (
    <AddressContainer>
      <AddressHeading>
        <MapPin size={22} />

        <div>
          <span>Endereço de Entrega</span>

          <p>Informe o endereço onde deseja receber o seu pedido</p>
        </div>
      </AddressHeading>
      <AddressForm>
        <AddressInput />
      </AddressForm>
    </AddressContainer>
  )
}
