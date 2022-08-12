import { Button } from "../../../../Components/Button";
import { RegularText } from "../../../../Components/Typography";
import { useCart } from "../../../../hooks/useCart";
import { formatMoney } from "../../../../Utils/formatMoney";
import { ConfirmationSectionContainer } from "./styles";

const DELIVERY_PRICE = 3.5


export function ConfirmationSection(){
  const {cartItemsTotal,cartQuantity} = useCart()
  
  const formatedCartTotal = formatMoney(cartItemsTotal)
  const formatedOrderTotal = formatMoney(cartItemsTotal + DELIVERY_PRICE)
  const formatedDeliveryPrice = formatMoney(DELIVERY_PRICE)

  return(
     <ConfirmationSectionContainer>
      <div>
        <RegularText size="s">Total de itens</RegularText>
        <RegularText >R$ {formatedCartTotal}</RegularText>
      </div>
      <div>
        <RegularText size="s">Entrega</RegularText>
        <RegularText >R$ {formatedDeliveryPrice}</RegularText>
      </div>
      <div>
        <RegularText weigth="700" color="subtitle" size="l">Total</RegularText>
        <RegularText weigth="700" color="subtitle" size="l">R$ {formatedOrderTotal}</RegularText>
      </div>
      <Button text="Confirmar Pedido" disabled={cartQuantity<=0} type="submit"/>
    </ConfirmationSectionContainer>

  )
}