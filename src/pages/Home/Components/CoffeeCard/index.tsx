
import { CoffeCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper } from "./styles";
import { RegularText, TitleText } from "../../../../Components/Typography";


import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../Components/QuatityInput";
import { formatMoney } from "../../../../Utils/FormatMoney";

export interface Coffee {
  id: number;
  tags: string[];
  name: string;
  description: string;
  photo: string;
  price: number;
}

interface CoffeeProps{
  coffee: Coffee;
}

export function CoffeeCard({coffee}: CoffeeProps){
  const formattedPrice = formatMoney(coffee.price)
  return(
    <CoffeCardContainer>
      <img src= {`/coffees/${coffee.photo}`} />
      <Tags>
        {coffee.tags.map((tag)=>(
          <span key={`${coffee.id}${tag}`}>{tag}</span>
        ))}
        
      </Tags>
      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>
      <CardFooter>
        <div>
          <RegularText size="s">R$</RegularText>
          <TitleText size="m" color="text" as="strong">{formattedPrice}</TitleText>
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