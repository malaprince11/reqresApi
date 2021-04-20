import React, {useState, useEffect} from 'react'

import './Form.css'
function Form() {
    const [article,setArticle] = useState({
        title:"",
        body:""
    })
    // const dispatch = useDispatch()

// const handleSubmit = (e) => {
//     e.preventDefault();
//     const newArticle = {
//         title: article.title,
//         body: article.body
//     }
//     dispatch({
//         type:"ADDARTICLE",
//         payload: article
//     })
//     setArticle({
//         title:"",
//         body:""
//     })

// }

const addTitle = (e) =>{
const newObjState = {...article, title: e.target.value}
 setArticle(newObjState)
}


const addBody = (e) =>{
    const newObjState = {...article, body: e.target.value}
    setArticle(newObjState)
   }


    return (
        <div className="form-align">
        <h1 className="title-form">Remplissez vos informations</h1>
            <form 
            // onSubmit={handleSubmit}
            className="container-form">
            <label htmlFor="title">Nom</label>
            <input
            value={article.title}
            onInput={addTitle}
            type="text"
            id="title"
            placeholder="Entrez votre nom" />
                  <label htmlFor="title">Prenom</label>
            <input
            value={article.title}
            onInput={addTitle}
            type="text"
            id="title"
            placeholder="Entrez votre prenom" />
            <label htmlFor="article">Date de naissance</label>
            <input
            type="date"
            value={article.body}
            onInput={addBody}
             id="" ></input>
            <button>Envoyez article</button>

            </form>
        </div>
    )
}

export default Form
