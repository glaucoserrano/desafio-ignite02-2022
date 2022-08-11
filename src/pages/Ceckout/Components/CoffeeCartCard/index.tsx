import { Trash } from "phosphor-react";
import { QuantityInput } from "../../../../Components/QuatityInput";
import { RegularText } from "../../../../Components/Typography";
import { ActionsContainer, CoffeeCartCardContainer, RemoveButton } from "./styles";

export function CoffeeCartCard(){
  return (
    <CoffeeCartCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1661126400&Signature=L5IbahK-curA41v9UI3E30yMngepfBRog2Kc0NCJDHe1RLuar0q6nsPesvyqgKUpTYmWGSsAKyEFPEuli8TO6bIl0fDRc6P6dJNXC57WgrDWCUHwJqCV-hFaFnirUGxF4qjcGmJzDQCv0oh32XncELdgrrkyeLktg6VibTf91pfxZueIbBHkyp1CcTZ7~9Rkr5KZ9MzraHJM7XrEoVe3LleVzmMxyYt8TRTuYkTXzTIcbZyynlovVGJ3qUC8a3LE70iLVP1jL7~bcYN2limxkLGIISwDPEkRo7k71jul1QaC9CuckZg4n7DdCx-GXwaN~zYDdRGN0cMj1JDi5uSPPw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
        <div>
          <RegularText color="subtitle">Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput size="small"/>
            <RemoveButton>
              <Trash size={16}/> REMOVER
            </RemoveButton>
          </ActionsContainer>
        </div>

      </div>
      <p>R$ 9,90</p>
    </CoffeeCartCardContainer>
  )
}