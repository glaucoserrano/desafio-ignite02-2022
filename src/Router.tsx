import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layout/DefaultLayout";
import { Checkout } from "./pages/Ceckout";
import { Home } from "./pages/Home";
import { OrderConfirmed } from "./pages/OrderConfirmed";

export function Router(){
  return(
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderConfirmed" element={<OrderConfirmed />} />
      </Route>
    </Routes>
  )
}