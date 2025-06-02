import '../styles/section3.css';

function Section3() {

    return (

        <div id='section3'>
            <div id='section3Header'>
            <h1 id='tt'>CARACTERISTICAS</h1>
            <p id='informacion'>Armado para el combate, el TUF Gaming F15 viene equipado hasta con Intel® Core™ i7 de 10.ª Gen. (6 núcleos y 12 hilos), unos procesadores que permiten jugar, transmitir streamings y llevar a cabo multitarea avanzada. La GPU GeForce® GTX 1660 Ti genera velocidades de cuadro altas con una gran variedad de juegos y el SSD NVMe PCIe® de hasta 1 TB acelera los tiempos de carga. También cuenta con espacio para una segunda unidad SSD.</p>
            </div>
            <div id='caracteristicas'>
                <div className='textContainer' id='so'> 
                    <p className='big'>Windows 14 plus</p>
                </div>
               
                <div className="textContainer" id='cpu'>
                    <p className="small up">CPU</p>
                    <p className="big"> INTEL® CORE™ I7</p>
                    <p className="small down ">10ª GEN</p>
                </div>
                <div className="textContainer" id='gpu'>
                    <p className="small up">CPU</p>
                    <p className="big">GTX 1660 TI</p>
                    <p className="small down">Nvidia° GEFORCE</p>
                </div>
                <div className="textContainer" id='ram'>
                    <p className="small">Hasta 32 GB</p>
                    <p className="big">2933 MHZ</p>
                    <p className="small down"></p>
                </div>
                <div className="textContainer" id='ssd'>
                    <p className="big">1 TB SSD</p>
                    <p className="small down">NVME PCIE</p>
                </div>
                <div className="textContainer" id="hola">
                    <p className="big">2X SSD</p>
                    <p className="small down">RANURAS</p>
                </div>
            </div>

        </div>
    )
}

export default Section3;