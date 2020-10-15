import React, {
    createContext,
    useState,
} from 'react';

// implements document validation
import { validarCedula } from '../utils/logica'

export const FormContext = createContext({
    getFields: () => undefined,
    setField: (name, type, error, value, equalField) => undefined,
    validateFields: () => undefined,
    validationIsActive: () => undefined,
    setValidationFlag: (value) => undefined,
    getErrorByField: (fieldName) => undefined,
    removeErrorByField: (fieldName) => undefined
});

export const FormProvider = ({
    children
}) => {

    const [fields, setFields] = useState({});
    const [errors, setErrors] = useState({});
    const [flagValidation, setFlagValidation] = useState(true);

    const getFields = () => {
        return fields;
    }

    const validationIsActive = () => {
        return flagValidation;
    }

    const setValidationFlag = (value) => {
        setFlagValidation(value)
    }

    const setField = (name, type, error, value, equalField, label) => {
        let fieldsCopy = fields;
        Object.assign(fieldsCopy, {
            [name]: {
                value: value, type: type, error: error, equalField: equalField, label: label
            }
        });
        setFields(fieldsCopy);
    }

    const getErrorByField = (fieldName) => {
        return errors[fieldName];
    }

    const removeErrorByField = (fieldName) => {
        let copyErrors = errors;
        delete copyErrors[fieldName];
        setErrors(copyErrors);
    }

    const validateFields = () => {
        let success = true;
        setErrors({});
        let errorsCopy = {};
        // let fieldsCopy = fields;
        Object.keys(fields).map(fieldName => {
            if (!fields[fieldName].value) {
                success = false;
                Object.assign(errorsCopy, { [fieldName]: 'El campo es requerido' })
            } else {
                let fieldValue = fields[fieldName].value;
                switch (fields[fieldName].type) {
                    case 'string':
                        if (!/^[A-Za-z\s]+$/.test(fieldValue)) {
                            Object.assign(errorsCopy, { [fieldName]: 'Debe ingresar solo letras' })
                            success = false;
                        }
                        break;
                    case 'password':
                        break;
                    case 'checkbox':
                        if (!fieldValue) {
                            Object.assign(errorsCopy, { [fieldName]: 'Debe seleccionar el cuadro' })
                            success = false;
                        }
                        break;
                    case 'select':
                        if (fieldValue === fields[fieldName].label) {
                            Object.assign(errorsCopy, { [fieldName]: 'Debe seleccionar una opcion' })
                            success = false;
                        }
                        break;
                    // its ok
                    case 'ci':



                        // implements the document number validator

                        if (!validarCedula(fieldValue)) {
                            Object.assign(errorsCopy, { [fieldName]: 'El documento no es valido!' })
                            success = false;
                        }




                        break;
                    case 'email':
                        if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(fieldValue)) {
                            Object.assign(errorsCopy, { [fieldName]: 'El email no es correco' })
                            success = false;
                        }
                        break;
                    case 'number':
                        if (!/^[0-9]+$/.test(fieldValue)) {
                            Object.assign(errorsCopy, { [fieldName]: 'Debe ingresar solo numeros' })
                            success = false;
                        }
                        break;
                }
                // check equal field
                let equalField = fields[fieldName].equalField;
                if (equalField) {
                    if (fields[fieldName].value !== fields[equalField].value) {
                        Object.assign(errorsCopy, { [fieldName]: 'Los campos no coinciden' })
                        Object.assign(errorsCopy, { [equalField]: 'Los campos no coinciden' })
                        success = false;
                    }
                }
            }
        })
        setErrors(errorsCopy);
        return success;
    }

    const context = {
        getFields,
        setField,
        getErrorByField,
        removeErrorByField,
        validationIsActive,
        validateFields,
        setValidationFlag
    };

    return (
        <FormContext.Provider value={context}>
            {children}
        </FormContext.Provider>
    );
};