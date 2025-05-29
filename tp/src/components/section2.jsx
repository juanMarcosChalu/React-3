import '../styles/section1.css';
import img2 from '../assets/HP400G9I512GEN-768x768.png';

function Section2() {
    return (
        <section id='section2'>
            <div>
                <h4>Todo bien?</h4>
                <p>Esta es la segunda seccion de la pagina, en esta seccion veremos informacion sobre las computadoras y sus especificaciones.</p>
            </div>
            <div id='img-container'>
                <img src={img2} alt="Imagen de una PC Gamer" />
            </div>
        </section>
    );
}

export default Section2;