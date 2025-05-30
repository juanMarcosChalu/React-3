import '../styles/section1.css';
import img2 from '../assets/HP400G9I512GEN-768x768.png';
import "../styles/section2.css";
function Section2() {
    return (
        <section id='section2'>
            <div>
                <h4>Lenovo 30 pro</h4>
                    <p>
                        Un equipo robusto y de alta velocidad, capaz de brindarte el mejor rendimiento por un modico precio
                        con una excelente garantia de 2 años;
                    </p>
            </div>
            <div id='img-container'>
                <img src={img2} alt="Imagen de una PC Gamer" />
            </div>
        </section>
    );
}

export default Section2;