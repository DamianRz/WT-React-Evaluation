import React, { useState, useEffect, useContext, } from 'react';
import { FormContext } from '../../contexts/FormContext.jsx';
import './textfield.scss';
import '../../theme/theme.scss';

export const Textfield = ({
    id,
    label,
    name,
    type,
    equalField,
    defaultvalue,
    className,
    items,
    tabIndex,
    required,
    onChange,
}) => {

    const [value, setValue] = useState(defaultvalue || '');
    const [checked, setCheck] = useState(true);

    const {
        setField, getErrorByField, removeErrorByField, validationIsActive
    } = useContext(FormContext);

    useEffect(() => {
        setField(name, type, value, equalField, label);
        onChange && onChange(value);
        // eslint-disable-next-line
    }, [value]);


    const handleChange = (e) => {
        if (type === 'checkbox') {
            setValue(checked)
            setCheck(value => !value)
        } else {
            setValue(e.target.value);
        }
    };

    const ErrorLabel = ({ value }) => {
        if (value) {
            return (
                <div>
                    <label className="error-label theme-text">{value}</label>
                </div>
            )
        } else {
            return null;
        }
    };

    return (
        <div className={`textfield-box type-${type} ${className}`}>

            {/* top placeholder */}
            {!value && (type !== 'select' && type !== 'checkbox') && < label for={id} className="internal-label">{label}</label>}

            {/* center placeholder */}
            { value && (type !== 'checkbox') && <label for={id} className="external-label">{label}</label>}

            {/* checkbox placeholder */}
            {(type === 'checkbox') && < label for={id} className="internal-label">{label}</label>}

            {type === "select" ? (
                <select
                    id={id}
                    name={name}
                    onClick={(() => { removeErrorByField(name) })}
                    onChange={handleChange}
                    className={`select-box ${validationIsActive() && getErrorByField(name) && 'error'}`}
                >
                    <option value={label}>{label}</option>
                    {items.map((item, i) => {
                        return <option key={i} value={item}>{item}</option>
                    })}
                </select>

            ) : (
                    <input
                        id={id}
                        onClick={(() => { removeErrorByField(name) })}
                        className={`input-box ${validationIsActive() && getErrorByField(name) && 'error'}`}
                        tabIndex={tabIndex}
                        name={name}
                        type={type || 'string'}
                        required={required}
                        value={value}
                        autoFocus
                        onChange={handleChange}
                    />
                )
            }

            {/* Error message  */}
            {validationIsActive() && getErrorByField(name) &&
                <ErrorLabel value={getErrorByField(name)} />}
        </div >
    )
}
