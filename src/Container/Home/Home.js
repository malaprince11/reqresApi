import React ,{useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css'



function Home() {
    const [users, setUsers] = useState([]);

    const userData = async () => {
        const respons = await fetch ("https://reqres.in/api/users/");
        const data = await respons.json();
        setUsers(data.data)
    }

    useEffect(() => {
        userData();
       
    }, [])

    return (
        <div className="home-container">
            <h1 className="home-title">home</h1>
            
            {users.map((user) =>{
                return(
                    <div key={user.id}>
                    <h3>Bonjour {user.first_name} votre anniversaire est dans nbrJours.Si cela est incorrectvous pouvez modifier les information <Link to="/formulaire">ici</Link> </h3>
                    


                    </div>
                )
            })}
            

        </div>
    )
}

export default Home
