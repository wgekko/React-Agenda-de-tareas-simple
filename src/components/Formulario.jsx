import Swal from "sweetalert2";
import { useFormulario } from "../hooks/useFormulario";
import {v4 as uuid4} from 'uuid';

const Formulario = ({ addTarea }) => {
    const initialState = {
        nombre: "",
        descripcion: "",
        estado: "pendiente",
        prioridad: false,
    };

    const [inputs, handleChange, reset] = useFormulario(initialState);

    const { nombre, descripcion, estado, prioridad } = inputs;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) {
            e.target[0].focus();
            return Swal.fire({
                title: "Error!",
                text: "Nombre obligatorio",
                icon: "error",
            });
        }
        if (!descripcion.trim()) {
            e.target[1].focus();
            return Swal.fire({
                title: "Error!",
                text: "Descripción obligatoria",
                icon: "error",
            });
        }

        // Agregar todo
        addTarea({
            nombre: nombre,
            descripcion: descripcion,
            estado: estado === "pendiente" ? false : true,
            prioridad: prioridad,
            id: uuid4(),
            //id: Date.now(),
        });

        Swal.fire({
            title: "Éxito",
            text: "¡Todo agregado!",
            icon: "success",
        });

        // limpiar form    
        reset();
    };

    return (
        <>
            <div className="container border p-3 mb-2 bg-info text-white">
                <h3 className="bg-gradient container border text-center text-light bg-dark mt-3">Formulario</h3>
                <form className="container border" onSubmit={handleSubmit}>
                    <br/>
                    <input
                        type="text"
                        placeholder="nombre"
                        name="nombre"
                        value={nombre}
                        onChange={handleChange}
                        className="form-control mb-2 "
                    />
                    <textarea
                        type="text"
                        placeholder="ingrese descripción"
                        name="descripcion"
                        value={descripcion}
                        onChange={handleChange}
                        className="form-control mb-3"
                    />
                    <select
                        name="estado"
                        value={estado}
                        onChange={handleChange}
                        className="form-control mb-3"
                    >
                        <option value="pendiente">pendiente</option>
                        <option value="finalizado">finalizado</option>
                    </select>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            name="prioridad"
                            id="idCheckbox"
                            checked={prioridad}
                            onChange={handleChange}
                            className="form-check-input mb-5 mx-auto"
                        />                    
                        <label htmlFor="idCheckbox" className="form-check-label " >
                            <p className="text-left">  - Dar prioridad</p> 
                        </label>
                        
                    </div>
                    <br/>
                    <button type="submit" className="btn btn-primary">
                        Guadar
                    </button>
                    <br/>
                </form>
            </div>    
        </>
    );
};

export default Formulario;