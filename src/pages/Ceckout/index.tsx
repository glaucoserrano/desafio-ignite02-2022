import { CheckoutForm } from "./Components/CheckoutForm";
import { SelectedCoffees } from "./Components/SelectedCoffees";
import { CheckOutContainer } from "./styles";
import * as zod from 'zod'
import  {zodResolver}  from '@hookform/resolvers/zod'
import {useForm, FormProvider} from 'react-hook-form'
import { useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

enum PaymentMethods{
  credit="credit",
  debit = "debit",
  money = "money"
}

const confirmOrderValidationSchema = zod.object({
  cep: zod.string().min(1, "Informe o CEP"),
  street: zod.string().min(1, "Informe o Rua"),
  number: zod.string().min(1, "Informe o Número"),
  complement: zod.string(),
  district: zod.string().min(1, "Informe o Bairro"),
  city: zod.string().min(1, "Informe a Cidade"),
  uf: zod.string().min(1, "Informe a UF"),
  paymentmethod: zod.nativeEnum(PaymentMethods, {
    errorMap: ()=>{
      return {message: "Informe o método de pagamento"}
    }
  })
})
export type OrderData = zod.infer<typeof confirmOrderValidationSchema>

type confirmOrderFormData = OrderData;
export function Checkout(){
  const confirmOrderForm = useForm<confirmOrderFormData>({
    resolver:zodResolver(confirmOrderValidationSchema)
  })
  const {handleSubmit} = confirmOrderForm
  const {cleanCart} = useCart()
  const navigate = useNavigate();

  function handleConfirmOrder(data: confirmOrderFormData){
    navigate("/orderConfirmed", {state: data})
    cleanCart()
    
  }
  return(
    <FormProvider {...confirmOrderForm}>
      <CheckOutContainer className="container" onSubmit={handleSubmit(handleConfirmOrder)}>
        <CheckoutForm />
        <SelectedCoffees />
      </CheckOutContainer>
    </FormProvider>
  )
}