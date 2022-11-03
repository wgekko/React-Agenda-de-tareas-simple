import React from 'react'
import TareasList from './components/TareasList';

//p-3 mb-2 bg-secondary text-white 
const App = () => {
  return (
    <div className=""  >
                
        <h1 className="container border text-center text-info bg-dark ">  Agenda de tareas</h1>  
        <TareasList/>
        <br/>
        <p className="container border text-center"><em><u><strong> &copy; 2022 - Walter Gomez - Fullstack Developer </strong></u></em></p>      
    </div>

  )
}

export default App;