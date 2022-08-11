import { TitleText } from "../../../../Components/Typography";
import { coffees } from "../../../../Data/coffees";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeList, OurCoffesContainer } from "./styles";

export function OurCoffees(){
  return(
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeList>
        {coffees.map((coffee) => (
          <CoffeeCard key={coffee.id} coffee={coffee}/>  
        ))}
        
      </CoffeList>
    </OurCoffesContainer>
  )
}