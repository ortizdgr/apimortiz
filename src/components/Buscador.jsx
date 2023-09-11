import { useEffect } from "react"
import Form from 'react-bootstrap/Form'

const Buscador = ({ info, busqueda, setBusqueda, setResultadoBusqueda }) => {

    const handleChange = (e) => {
        setBusqueda(e.target.value)
    }
    useEffect(() => {
        if (!busqueda) {
            setResultadoBusqueda(info)
        } 
        
        else {
            setResultadoBusqueda(info.filter((pais) =>
                pais.name.common.toLowerCase().includes(busqueda.toLowerCase()) ||
                pais.name.official.toLowerCase().includes(busqueda.toLowerCase())
            ))
        }
    }, [info, busqueda, setBusqueda, setResultadoBusqueda]);


    return (
        <>
            <Form>
                <Form.Group controlId="formBuscar">
                    <Form.Control type="text" name="buscador" placeholder="Buscador..." 
                    value={busqueda} onChange={handleChange} />
                </Form.Group>
            </Form>
        </>
    );
}
export default Buscador;