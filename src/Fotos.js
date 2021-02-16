import Perfil from './img/perfil.png'
import Figma from './img/Figma1200.png'
import Codigo from './img/hospedaje.png'

import './global.css'

function Fotos(){
    return(
        <div className="container">
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                    <img src={Perfil} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={Figma} class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                    <img src={Codigo} class="d-block w-100" alt="..." />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Fotos;