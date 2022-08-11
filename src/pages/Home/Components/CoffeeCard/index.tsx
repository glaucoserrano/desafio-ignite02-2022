
import { CoffeCardContainer, Tags, Name } from "./styles";

export function CoffeeCard(){
  return(
    <CoffeCardContainer>
      <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1661126400&Signature=L5IbahK-curA41v9UI3E30yMngepfBRog2Kc0NCJDHe1RLuar0q6nsPesvyqgKUpTYmWGSsAKyEFPEuli8TO6bIl0fDRc6P6dJNXC57WgrDWCUHwJqCV-hFaFnirUGxF4qjcGmJzDQCv0oh32XncELdgrrkyeLktg6VibTf91pfxZueIbBHkyp1CcTZ7~9Rkr5KZ9MzraHJM7XrEoVe3LleVzmMxyYt8TRTuYkTXzTIcbZyynlovVGJ3qUC8a3LE70iLVP1jL7~bcYN2limxkLGIISwDPEkRo7k71jul1QaC9CuckZg4n7DdCx-GXwaN~zYDdRGN0cMj1JDi5uSPPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
      <Tags>
        <span>tradicional</span>
        <span>com leite</span>
      </Tags>
      <Name>
        Expresso Tradicional
      </Name>
    </CoffeCardContainer>
  )
}