import '../styles/section1.css';
import img from '../assets/computadoracualquiera.png';
function Section1() {
    return (
        <section id='section1'>
            <div>
                <h1>Bienvenidos usuarios,</h1>
                <h4>Todo bien?</h4>
                <p>Bienvenidos a la alucinante pagina creada por los estudiantes de la Escuela de educacion secundaria tecnica N°1 de Benito Juarez.<br/> En esta pagina veras informacion sobre ciertas computadoras y sus especificaciones, saludos.  </p>
            </div>
            <div id='img-container'>
                <img src={img} alt="Imagen de una PC Gamer" />
            </div>
        </section>
    );
}

export default Section1;