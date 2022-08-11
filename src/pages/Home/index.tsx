import { Intro } from "./Components/Intro";
import { OurCoffees } from "./Components/OurCoffees";
import { HomeContainer } from "./styles";

export function Home(){
  return (
    <HomeContainer>
      <Intro />
      <OurCoffees />
    </HomeContainer>
  )
}