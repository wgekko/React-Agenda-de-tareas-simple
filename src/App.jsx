import React from 'react'
import TareasList from './components/TareasList';

const App = () => {
  return (
    <div className=''>        
        <h1 className="container border text-center mt-5 text-info bg-dark "> App de agendar de tareas</h1>  
        <TareasList/>
        <br/>
        <p className="container border text-center"><em><u><strong> &copy; 2022 - Walter Gomez - Fullstack Developer </strong></u></em></p>      
    </div>

  )
}

export default App;