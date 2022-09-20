import { useState } from "react";
import React from 'react';


const LinkForm = (props) => {

    const initialStateValues = {
        Nombre: '',
        Apellidos: '',
        Edad: '',
        Date: '',
        Peso: '',
        Altura: '',
        Lugar: '',
    }

    const [values, setValues] = useState(initialStateValues);


    const handleSubmit = e => {
        e.preventDefault();
        props.addOrEdit(values);
        setValues({...initialStateValues})
    }

    const handleInputChange = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        });
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group m-1">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <input onChange={handleInputChange} 
                       type="text" 
                       className='form-control' 
                       placeholder='Nombre' 
                       name='Nombre'
                       value={values.Nombre}/>
            </div>

            <div className="form-group input-group m-1">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <input onChange={handleInputChange} 
                       type="text" 
                       className='form-control' 
                       placeholder='Apellidos' 
                       name='Apellidos'
                       value={values.Apellidos}/>
            </div>

            <div className="form-group input-group m-1">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <input onChange={handleInputChange} 
                       type="text" 
                       className='form-control' 
                       placeholder='Edad' 
                       name='Edad'
                       value={values.Edad}/>
            </div>

            <div className="form-group input-group m-1">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <input onChange={handleInputChange} 
                       type="date" 
                       className='form-control'
                       name='Date'
                       value={values.Date}/>
            </div>

            <div className="form-group input-group m-1">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <input onChange={handleInputChange} 
                       type="text" 
                       className='form-control' 
                       placeholder='Peso' 
                       name='Peso'
                       value={values.Peso}/>
            </div>

            <div className="form-group input-group m-1">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <input onChange={handleInputChange} 
                       type="text" 
                       className='form-control' 
                       placeholder='Altura' 
                       name='Altura'
                       value={values.Altura}/>
            </div> 

            <div className="form-group input-group m-1">
                <div className="input-group-text bg-light">
                    <i className="material-icons">add_circle_outline</i>
                </div>
                <input onChange={handleInputChange} 
                       type="text" 
                       className='form-control' 
                       placeholder='Lugar' 
                       name='Lugar'
                       value={values.Lugar}/>
            </div>

            <button className='btn btn-primary btn-block'>
                Salvar
            </button>  
        </form>
    );
}

export default LinkForm;