import "./Carousel.css"
import Carousel from 'react-bootstrap/Carousel';
import imagen1 from "./Pasta-slider Final.jpg";
import imagen2 from './pizza-slider Final.jpg';
import imagen3 from './Vida-saludable-slider Final.jpg';

function IndividualIntervalsExample() {
    return (
        <Carousel className="mt-3 mb-4 ">
            <Carousel.Item interval={1000}>
            <img src={imagen1} className="d-block w-100" alt="" />

            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img src={imagen2} className="d-block w-100" alt="" />
            </Carousel.Item>
            <Carousel.Item>
            <img src={imagen3} className="d-block w-100" alt="" />
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;