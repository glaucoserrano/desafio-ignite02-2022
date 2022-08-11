
import { NavLink } from 'react-router-dom';
import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';


import logoCoffee from '../../assets/Logo.svg';

export function Header(){
  return(
    <HeaderContainer>
      <div className='container'>
        <NavLink to="/">
          <img src={logoCoffee} alt="" />
        </NavLink>
        <HeaderButtonsContainer>
          <HeaderButton variant='purple'>
            <MapPin size={20} weight="fill"/>
            Bauru - SP
          </HeaderButton>
          <HeaderButton variant='yellow'>
            <ShoppingCart size={20} weight="fill"/>
          </HeaderButton>
        </HeaderButtonsContainer>
      </div>
    </HeaderContainer>
  )
}