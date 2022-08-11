import { TitleText } from "../../../../Components/Typography";
import { CoffeeCard } from "../CoffeeCard";
import { CoffeList, OurCoffesContainer } from "./styles";

export function OurCoffees(){
  return(
    <OurCoffesContainer className="container">
      <TitleText size="l" color="subtitle">
        Nossos cafés
      </TitleText>
      <CoffeList>
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
        <CoffeeCard />
      </CoffeList>
    </OurCoffesContainer>
  )
}