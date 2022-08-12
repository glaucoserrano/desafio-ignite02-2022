import { forwardRef, InputHTMLAttributes } from "react";
import { RegularText } from "../Typography";
import { InputStyleContainer, InputStyled, InputWrapper, RightText } from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
};

// export function Input({...props} : InputProps){
//   return (<InputStyleContainer {...props}/>)
// }


// export const Input = forwardRef<HTMLInputElement,InputProps>(
//   (props,ref)=>{
//     return(
//       <InputStyleContainer {...props} ref={ref} />
//     )
//   }
// )

export const Input = forwardRef<HTMLInputElement,InputProps>(
  ({error,className,rightText, ...props},ref)=>{
    return(
      <InputWrapper className={className}>
        <InputStyleContainer hasError={!!error}>
          <InputStyled {...props} ref={ref} />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {error &&(
          <RegularText size="s">{error}</RegularText>
        )}
      </InputWrapper>
    )
  }
)
