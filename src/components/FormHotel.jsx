import Inputs from "../components/Inputs"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
    
    export default function FormHotel() {
        const navigate = useNavigate()
  
            // let id = useRef ()
            // let name = useRef ()
            // let photo = useRef ()
            // let Capacity = useRef ()
            // let cityiId = useRef ()
    
            // function add (){ 
            //  let addHotel = {
            //     id: id.value,
            //       name:name.value,
            //       photo: photo.value,
            //       Capacity: Capacity.value,
            //       cityiId: cityiId.value,
            //     } 
            //     localStorage.setItem ("addHotel",JSON.stringify(addHotel))
                
            // }

            
        const [addHotel, setAddHotel] = useState([{
            id: '',
            name: '',
            photo: '',
            Capacity: '',
            CityId: '',
            userAdmin: '',
    
        }])
    
        const add = (e) => {
            const value = e.target.value
            const prop = e.target.name
            setAddHotel({
                ...addHotel,
                [prop]: value
            })
        }
    
        const ValidateInfo = async () => {
            localStorage.setItem('hotels', JSON.stringify(addHotel))
            alert('Hotel added successfully')
        }

    return (
        <form className='sign-in formAdminContainer' action="" onChange={add()} >
            
            <Inputs dato="Id" type="text" placeholder="Id"/>
            <Inputs dato="Name" type="text" placeholder="Name"/>
            <Inputs dato="Photo" type="text" placeholder="Photo"/>
            <Inputs dato="Capacity" type="text" placeholder="Capacity"/>
            <Inputs dato="CityId" type="text" placeholder="CityId"/>
            <Inputs dato="AdmId" type="text" placeholder="Administrador Id"/>
            <button className='button' onClick={() => ValidateInfo()}>Add Hotel</button>
            
          </form>
    )
}
