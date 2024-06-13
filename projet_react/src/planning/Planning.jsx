import React from 'react';
import './style.css';
import listeCours from './listeCours/listeCours.js';
import Navbar from '../navbar/Navbar.jsx';

export const Planning = () => {
    return (<>
            <Navbar />
        <div className='planning'>
            <table>
                <thead>
                    <tr>
                        <th>Cours</th>
                        <th>Date</th>
                        <th>Professeur</th>
                        <th>Horraire</th>
                        <th>Salle</th>
                    </tr>
                </thead>
                <tbody>
                    {listeCours.map((cours, index) => (
                        <tr key={index}>
                            <td>{cours.matière}</td>
                            <td>{cours.date}</td>
                            <td>{cours.professeur}</td>
                            <td>{cours.horraire}</td>
                            <td>{cours.salle}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}