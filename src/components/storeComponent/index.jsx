import tshirt_design from '../../images/tshirt_design.jpg';
import { StoreContainer } from "./storeElements";

function StoreComponent(){
    return(
        <StoreContainer>
            MoonQueen t-shirts will be available soon through Big Cartel.<br/>Artist credit: <a href='https://www.instagram.com/arismur07'>@arismur07</a><br/>
            <img 
                src={tshirt_design}
                alt="a beautiful painting of the moon melting into the sea"
                width="500px"/>
        </StoreContainer>
    )
}
export default StoreComponent