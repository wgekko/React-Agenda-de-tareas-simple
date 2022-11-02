import { useEffect, useState } from "react";
import Formulario from "./Formulario";
import Tarea  from "./Tarea";

const TareaList = () => {
    const [tareas, setTareas] = useState([]);

    // localStorage

    useEffect(() => {
        console.log("Leer tareas local");
        if (localStorage.getItem("tareas")) {
            setTareas(JSON.parse(localStorage.getItem("tareas")));
        }
    }, []);
    // cada vez que se modifica la tarea se guarda en el localstorage
    useEffect(() => {
        console.log("Guardar tareas local");
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }, [tareas]);

    // agregar tareas 
    const addTarea = (tarea) => {
        setTareas((old) => [...old, tarea]);
    };
    // borrar las tareas 
    const deleteTarea = (id) => {
        setTareas((old) => old.filter((item) => item.id !== id));
    };
    // modificar las tareas 
    const editarTarea = (id) => {
        const editTarea = tareas.map((item) =>
            item.id === id ? { ...item, estado: !item.estado } : item
        );
        setTareas(editTarea);
    };   
    
    return (
        <>
        <Formulario addTarea={addTarea} />
        <br/>
        <h2 className="container border text-center text-primary"> -  Listado de Tareas  - </h2>
        <ul className="list-group list-group-numbered">
            {tareas.map((item) => (
                <Tarea key={item.id} tarea={item} deleteTarea={deleteTarea} editarTarea={editarTarea} />
            ))}
        </ul>
        </>
    );
};

export default TareaList;