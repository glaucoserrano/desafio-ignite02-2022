import { CheckoutForm } from "./Components/CheckoutForm";
import { SelectedCoffees } from "./Components/SelectedCoffees";
import { CheckOutContainer } from "./styles";

export function Checkout(){
  return(
    <CheckOutContainer className="container">
      <CheckoutForm />
      <SelectedCoffees />
    </CheckOutContainer>
  )
}