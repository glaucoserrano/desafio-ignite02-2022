
import { CoffeCardContainer, Tags, Name, Description, CardFooter, AddCartWrapper } from "./styles";
import { RegularText, TitleText } from "../../../../Components/Typography";


import { ShoppingCart } from "phosphor-react";
import { QuantityInput } from "../../../../Components/QuatityInput";
import { formatMoney } from "../../../../Utils/formatMoney";
import { useCart } from "../../../../hooks/useCart";
import { useState } from "react";

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
  const [quantity,setQuantity] = useState(1);
  const {addCoffeeToCart} = useCart();
  function handleAddToCard(){
    const coffeeToAdd = {
      ...coffee,
      quantity
    }
    addCoffeeToCart(coffeeToAdd)
  }
  function handleIncrease(){
    setQuantity(state => state + 1);
  }
  function handleDecrease(){
    setQuantity(state => state - 1);
  }
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
          <QuantityInput 
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity = {quantity}
          />
          <button onClick={handleAddToCard}>
            <ShoppingCart weight="fill" size={22}/>
          </button>
        </AddCartWrapper>
      </CardFooter>
    </CoffeCardContainer>
  )
}