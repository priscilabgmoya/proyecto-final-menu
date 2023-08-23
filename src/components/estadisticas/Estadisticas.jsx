import React from 'react';
import './Estadisticas.css'
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { useLogin } from '../../context/LoginContext';
import { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const datos = {
  A: 12,
  B: 19,
  C: 3,
  D: 5,
  E: 2,
};



function Estadisticas () {
    const {cantidadMenues ,cargarMenusPedido} = useLogin();
    useEffect(()=>{
        cargarMenusPedido();  
    },[])
    const data = {
        labels: Object.keys(cantidadMenues),
        datasets: [
          {
            label: 'Productos mas Vendidos',
            data: Object.values(cantidadMenues),
            backgroundColor: 'rgb(255, 160, 122, 0.8)',
            borderColor: 'rgb(255, 160, 122, 0.5)',
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
          responsive : true,
          scales: {
            y: {
              beginAtZero: true,
            },
            x: {
              type: 'category',
            },
          },
          plugins: {
            legend: {
              labels: {
                color: 'red', // Cambia el color del texto de la leyenda
              },
            },
        }
        };
        
        
        
  return (
    <Container >
        <Row >
    <div className='contenedorEstadisticas'>
      <Bar data={data}  options={options}/>
    </div>
        </Row>
    </Container>
  );
};

export default Estadisticas;