
const Tarea = ({ tarea, deleteTarea, editarTarea }) => {
    const { id, nombre, descripcion, estado, prioridad } = tarea;
    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">
                    {nombre} ({estado ? "Finalizado" : "Pendiente"})
                </div>
                <p>{descripcion}</p>
                <div>
                    <button
                        className="btn btn-sm btn-danger me-1"
                        onClick={() => deleteTarea(id)}
                    >
                        Eliminar
                    </button>
                    <button className="btn btn-sm btn-warning me-1" onClick={() => editarTarea(id)}>
                        Editar
                    </button>
                </div>
            </div>
            <span className="badge bg-primary rounded-pill">
                {prioridad && "prioritario"}
            </span>
        </li>
    );
};

export default Tarea;