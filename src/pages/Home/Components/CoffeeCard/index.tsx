
import { CoffeCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper } from "./styles";
import { RegularText, TitleText } from "../../../../Components/Typography";

import Coffeetradicional from '../../../../assets/Coffee_tradicional.svg';
import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../Components/QuatityInput";

export function CoffeeCard(){
  return(
    <CoffeCardContainer>
      <img src= {Coffeetradicional} />
      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>
      <Name>Expresso Tradicional</Name>
      <Description>O tradicional café feito com água quente e grãos moídos</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">9,90</TitleText>
        </div>

        <AddCartWrapper>
          <QuantityInput />
          <button>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  )
}