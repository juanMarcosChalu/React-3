
import img2 from '../assets/pc-gamer.avif';
import "../styles/section2.css";
function Section2() {
    return (
        <section id='section2'>
          <div id='text'>
                <h1>GPU para laptop NVIDIA® GeForce RTX™ serie 40</h1>
                    <p>
                        Las GPU para laptop GeForce RTX™ serie 40 potencian las laptops más rápidas del mundo para jugadores y creadores. Diseñadas con la arquitectura Ada Lovelace sumamente eficiente, las laptops RTX serie 40 cuentan con núcleos Tensor de IA especializados, lo que permite nuevas experiencias de IA que no son posibles con una laptop promedio. Disfruta de un aumento considerable en el rendimiento con DLSS 3.5 y mundos virtuales realistas con trazado de rayos completo. Además, las tecnologías Max-Q con IA optimizan el rendimiento del sistema, la energía, la duración de la batería y la acústica para lograr la máxima eficiencia.
                    </p>
           </div>
            <div id='img-container-2'>
                <img src={img2} alt="Imagen de una PC Gamer" />
            </div>
        </section>
    );
}

export default Section2;