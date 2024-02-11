import React, { useState } from 'react'
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend, BarElement, Filler } from "chart.js";
import { Line, Bar } from "react-chartjs-2";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

ChartJS.register(LineElement, BarElement, CategoryScale, LinearScale, PointElement, Filler, Tooltip, Legend);

const Grid = ({ detail }) => {
    const [chart, setChart] = useState('Line');
    const [isOpen, setIsOpen] = useState(false); 
    
    const data = {
        labels: detail?.map(name => name?.employee_name), 
        datasets: [
            {
                label: 'Employee Salary',
                data: detail?.map(salary => salary?.employee_salary),
                fill: true,
                borderColor: 'rgba(0, 148, 255, 0.3)',
                backgroundColor: 'rgba(0, 148, 255, 0.3)',
                tension: 0.3,
            },
            {
                label: 'Employee Age',
                data: detail?.map(age => age?.employee_age),
                fill: true,
                borderColor: 'rgba(0, 38, 255, 0.3)',
                backgroundColor: 'rgba(0, 38, 255, 0.3)',
                tension: 0.3,
            }
        ]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: true,
        },
        scales: {
            y: {

            }
        }
    }
  return (
    <div className='grid'>
        <div className='select-container'>
            <select onChange={(e) => setChart(e.target.value)} onClick={() => setIsOpen((prev) => !prev)} >
                <option value="Line">Line Chart</option>
                <option value="Bar">Bar Chart</option>
                <option value="Both">Both</option>
            </select>
            {isOpen ? (
                <IoIosArrowUp className='icon' />
            ) : (
                <IoIosArrowDown className='icon' />
            )}
        </div>
        <div className='chart'>
            {/* Show or hide a component depending upon state */}
            {
                chart === 'Line' ? (
                    <Line data={data} options={options} className='chartBox' />
                ) : chart === 'Bar' ? (
                    <Bar data={data} options={options} className='chartBox' />
                ) : (
                    <>
                        <Line data={data} options={options} className='chartBox' />
                        <Bar data={data} options={options} className='chartBox' />
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Grid;