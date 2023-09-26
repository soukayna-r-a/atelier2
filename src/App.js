import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
const tab_obj = [
  { nom: 'Manar', math: 10.5, pc: 12.0, frnc: 16.0 },
  { nom: 'Mohamed', math: 13.0, pc: 18.0, frnc: 7.0 },
  { nom: 'Khalid', math: 15.0, pc: 15.0, frnc: 12.0 },
  { nom: 'Ikbal', math: 2.6, pc: 9.0, frnc: 10.0 },
  { nom: 'Aziz', math: 10.0, pc: 11.5, frnc: 15.0 },
  { nom: 'Said', math: 12.0, pc: 5.0, frnc: 13.0 },
  { nom: 'Moujahid', math: 20.0, pc: 15.0, frnc: 18.0 },
  { nom: 'Riyad', math: 18.0, pc: 13.0, frnc: 15.0 },
]
function AfficherResultatListe() {
  return (
    <>
      <ul>
        {tab_obj.map((item) => (
          <li>
            {item.nom} - Moyenne{' '}
            {((item.math + item.pc + item.frnc) / 3).toFixed(2)}
          </li>
        ))}
      </ul>
    </>
  )
}
const tableau = [
  { nom: 'Manar', math: 10.5, pc: 12.0, frnc: 16.0 },
  { nom: 'Mohamed', math: 13.0, pc: 18.0, frnc: 7.0 },
  { nom: 'Khalid', math: 15.0, pc: 15.0, frnc: 12.0 },
  { nom: 'Ikbal', math: 2.6, pc: 9.0, frnc: 10.0 },
  { nom: 'Aziz', math: 10.0, pc: 11.5, frnc: 15.0 },
  { nom: 'Said', math: 12.0, pc: 5.0, frnc: 13.0 },
  { nom: 'Moujahid', math: 20.0, pc: 15.0, frnc: 18.0 },
  { nom: 'Riyad', math: 18.0, pc: 13.0, frnc: 15.0 },
]
function AfficherResultatTableau() {
  return (
    <>
      <table className='table table-hover table-striped table-bordered'>
        <tr className='bg-success text-light '>
          <th scope='cole' className='py-2'>Nom</th>
          <th scope='cole'>Mathematique</th>
          <th scope='cole'>Physique</th>
          <th scope='cole'>Français</th>
          <th scope='cole'>Moyenne</th>
        </tr>
        {tableau.map((item) => (
          <tr className='table-bordered '>
            <td className='py-2 border'>{item.nom}</td>
            <td className='py-2 border'>{item.math}</td>
            <td className='py-2 border'>{item.pc}</td>
            <td className='py-2 border'>{item.frnc}</td>
            <td className='py-2 border'>{((item.math + item.pc + item.frnc) / 3).toFixed(2)}</td>
          </tr>
        ))}
      </table>
    </>
  )
}
function App() {
  return (
    <>
      <AfficherResultatListe />
      <AfficherResultatTableau />
    </>
  )
}
export default App;
