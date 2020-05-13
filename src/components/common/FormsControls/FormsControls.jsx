import React from "react"
import styles from './FormsControls.module.css'

const FormControl = ({input, meta, ...props}) => {
  const hasError = meta.touched && meta.error
  const errorClass = hasError ? styles.error : ''
  return (
    <div className={`${styles.formControl} ${errorClass}`}>
      <div>
        {props.children}
      </div>
      {hasError && <span className={styles.errorText}>{meta.error}</span>}
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