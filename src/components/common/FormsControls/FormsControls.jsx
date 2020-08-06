import React from "react"
import styles from './FormsControls.module.css'
import {Field} from "redux-form"
import {required} from "../../../utils/validators"

const FormControl = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error
    const errorClass = hasError ? styles.error : ''
    return (
        <div className={`${styles.formControl} ${errorClass}`}>
            <div>
                {children}
            </div>
            {hasError && <span className={styles.errorText}>{error}</span>}
        </div>
    )
}
export const Textarea = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><textarea {...input} {...restProps}/></FormControl>
}

export const Input = (props) => {
    const {input, meta, ...restProps} = props;
    return <FormControl {...props}><input {...input} {...restProps}/></FormControl>
}

export const createField = (placeholder, component, name, validators, props = {}, text = '') => (
    <>
        <Field
            component={component}  name={name} placeholder={placeholder} validate={[validators]} {...props}/>
        {text}
    </>
)