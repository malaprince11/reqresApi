import React, {useState, useEffect} from 'react'

import './Form.css'
function Form() {
    const [user,setUser] = useState({
        nom:"",
        prenom:"",
        date:""
    })
    // .ajax({
    //     url: "https://reqres.in/api/users",
    //     type: "POST",
    //     user: {
    //         name: "toi",
    //         prenom: "moi",
    //         date: "13-09-63"
    //     },
    //     success: function(response){
    //         console.log(response);
    //     }
    // });

    
    
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...user})
    };
    const requeteFetch = fetch('https://reqres.in/api/users', requestOptions)
    .then(response =>{
        response.json()
        console.log("data", response);
    } )
    
    
    const storeData = async () => {
        const data = await requeteFetch()
        console.log("****", data)
     }

const url =storeData()

    // const dispatch = useDispatch()

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const newInfo = {
//         nom: article.title,
//         prenom: article.body,
      // date:user.date
//     }
//     dispatch({
//         type:"ADDARTICLE",
//         payload: article
//     })
//     setUser({
//          nom:"",
        // prenom:"",
        // date:""
//     })

// }

const addNom = (e) =>{
const newObjState = {...user, nom: e.target.value}
setUser(newObjState)
}


const addPrenom = (e) =>{
    const newObjState = {...user, prenom: e.target.value}
    setUser(newObjState)
   }

   const addDate = (e) =>{
    const newObjState = {...user, date: e.target.value}
    setUser(newObjState)
   }


    return (
        <div className="form-align">
        <h1 className="title-form">Remplissez vos informations</h1>
            <form 
             onSubmit={requeteFetch}
            className="container-form">
            <label htmlFor="title">Nom</label>
            <input
            value={user.nom}
            onInput={addNom}
            type="text"
            id="nom"
            placeholder="Entrez votre nom" />
                  <label htmlFor="title">Prenom</label>
            <input
            value={user.prenom}
            onInput={addPrenom}
            type="text"
            id="prenom"
            placeholder="Entrez votre prenom" />
            <label htmlFor="article">Date de naissance</label>
            <input
            type="date"
            value={user.date}
            onInput={addDate}
             id="" ></input>
            <button>Envoyez info</button>

            </form>
        </div>
    )
}

export default Form
