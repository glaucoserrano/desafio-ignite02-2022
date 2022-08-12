import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { ContentContainer, PaymentMethodInputContainer } from "./styles";


type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: ReactNode,
  label: string
}

// export function PaymentMethodInput({icon, label, id, ...props} : PaymentMethodInputProps){
//   return(
//     <PaymentMethodInputContainer>
//       <input id={id} type="radio" {...props} name="paymentmethod"/>
//       <label htmlFor={id}>
//         <ContentContainer>
//           {icon}
//           {label}
//         </ContentContainer>
//       </label>
//     </PaymentMethodInputContainer>
//   )
// }

export const PaymentMethodInput = forwardRef<HTMLInputElement,PaymentMethodInputProps>(({icon, label, id, ...props}, ref) =>{
  return (
    <PaymentMethodInputContainer>
      <input id={id} type="radio" {...props} name="paymentmethod" ref={ref}/>
      <label htmlFor={id}>
        <ContentContainer>
          {icon}
          {label}
        </ContentContainer>
      </label>
    </PaymentMethodInputContainer>
  )
})