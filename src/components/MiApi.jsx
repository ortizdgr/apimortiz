import { useEffect } from "react"
import { Table } from 'react-bootstrap'
import { Image } from 'react-bootstrap'

const MiApi = ({ setInfo, resultadoBusqueda }) => {
    try {
        useEffect(() => {
            consultarApi()
        }, [])
        const consultarApi = async () => {
            const response = await fetch("https://restcountries.com/v3.1/region/america")
            const data = await response.json()
            const dataIndependent = data.filter((pais) => pais.independent == true)
            setInfo(dataIndependent)
        
            if (response.status != 200) {
            throw new Error
        }
    }}
    catch (Error) {
        alert({Error})
    }

return (
    <>
     <Table >
        <div class="card">

            <tbody>
                {resultadoBusqueda.map((pais) => (
                    <tr key={pais.ccn3}>
                    
                    <div class="card-body"> 
                    <td><Image src={pais.flags.png} alt={pais.flags.alt} width="200px"/></td>  
                    </div>

                    <div class="card-body"> 
                    <td>{pais.name.common}</td>
                    </div>

                    <div class="card-body"> 
                    <td>{pais.name.official}</td>  
                    </div>

                    <div class="card-body"> 
                    <td><a href={pais.maps.googleMaps} target="_blank">Google Maps</a></td>  
                    </div>
                            
                    </tr>
                ))}</tbody>

        </div>
        </Table>
     
    </>
);
}
export default MiApi;