import React, {useEffect, useState} from 'react';
import LinkForm from './linkForm';
import db from '../firebase';

const Links = () => {

    const [Persons, setPersons] = useState([]);

    const addOrEdit = async (LinkPerson) => {
        await db.collection('Persons').doc().set(LinkPerson);
        console.log("New persons added");
    }


    const getLinks = async () => {
        db.collection('links').onSnapshot((querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(doc => {
                docs.push({...doc.data, id:doc.id})
            });
       }); 
    }

    useEffect(() => {
        getLinks();
    }, [])

    return (
    <>
        <div>
            <div className='col-md-12 p-2'>
                <LinkForm addOrEdit={addOrEdit}/>
            </div>
            <div className="col-md-8 p-2">
                {Persons.map(Person => (
                    <div className='card mb-1'>
                        <div className='card-body'>
                        {/* 
                            <h4>{Person.Nombre}</h4>
                            <h4>{Person.Apellidos}</h4>
                            <p>{Person.Edad}</p>
                            <p>{Person.Date}</p>
                            <p>{Person.Peso}</p>
                            <p>{Person.Altura}</p>
                            <p>{Person.Lugar}</p> 
                        */} 
                        </div> 
                    </div>
                ))}
            </div>   
        </div>
    </>
    );
}

export default Links;