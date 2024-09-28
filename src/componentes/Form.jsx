import { useContext, useState } from "react"

export const Form = ({handleChange, submit, formData, error}) => {
    return <>
        <form onSubmit={submit}>
            {
                Object.keys(formData).map((key, i)=>(
                    <>
                        <div className="form-group p-1 m-1">
                            <label htmlFor="name"key={i}>Ingrese {key}</label>
                            <input className="form-control" type="text" name={key} id={key} onChange={handleChange} value={formData[key]}/>
                            {
                                error[key] && <p>{error[key]}</p>
                            }
                        </div>
                    </>
                ))
            }
            <div className="text-end">
                <button type="submit" className="btn btn-secondary p-1">Crear Orden</button>
            </div>
        </form>
    </>
}