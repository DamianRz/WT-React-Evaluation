import React, { useContext, useState } from 'react';
import { Textfield } from '../textfield';
import { FormContext, FormProvider } from '../../contexts/FormContext';
import { dptosLocs } from '../../data/datos';
import './user-form.scss';
import '../../theme/theme.scss';
import './user-form-mobile.scss';

export const UserForm = () => {

    const [selectedDepartment, setDepartment] = useState('');




    const submit = async (dataFields) => {
        alert('Todos los datos son correctos!')
        console.log(dataFields)
    };




    const SubmitButton = ({
        onClick
    }) => {
        const {
            validateFields,
            getFields,
        } = useContext(FormContext);
        return (
            <div className="submit-box">
                <button
                    className="submit-btn theme-button"
                    onClick={() => {
                        if (validateFields()) {
                            onClick(getFields());
                        }
                    }}
                >ENVIAR</button>
            </div>
        );
    };

    return (
        <div className="user-form">
            <p className="form-title theme-text theme-title">Formulario</p>
            <hr />
            <div className="form-box">
                <FormProvider>
                    <div className="flex-fields">
                        <Textfield
                            id="name"
                            name="name"
                            label="Nombre"
                            type="string"
                            className="textfield-item"
                        />
                        <div className="divider" />
                        <Textfield
                            id="lastname"
                            name="lastname"
                            label="Apellido"
                            type="string"
                            className="textfield-item"
                        />
                    </div>
                    <div className="large-field">
                        <Textfield
                            id="email"
                            name="email"
                            label="e-Mail"
                            type="email"
                            className="textfield-item"
                        />
                    </div>
                    <div className="flex-fields">
                        <Textfield
                            id="department"
                            name="department"
                            label="Departamento"
                            type="select"
                            items={[...Object.keys(dptosLocs)]}
                            onChange={value => {
                                (value !== 'Departamento' && setDepartment(value))
                            }}
                            className="textfield-item"
                        />
                        <div className="divider" />
                        <Textfield
                            id="location"
                            name="location"
                            label="Localidad"
                            type="select"
                            items={selectedDepartment ? [...dptosLocs[selectedDepartment]] : []}
                            className="textfield-item"
                        />
                    </div>
                    <div className="flex-fields">
                        <Textfield
                            id="ci"
                            name="ci"
                            label="C.I."
                            type="ci"
                            className="textfield-item"
                        />
                        <div className="divider" />
                        <Textfield
                            id="accept"
                            name="accept"
                            label="Acepto las bases y condiciones"
                            type="checkbox"
                            value={true}
                            className="textfield-item"
                        />
                    </div>
                    <SubmitButton
                        onClick={submit}
                    />
                </FormProvider>
            </div>
        </div>
    )
}