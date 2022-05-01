import React from 'react'

const types = {
  email: {
    regex: /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i,
    message: 'Preencha um Email Válido'
  },
  password: {
    regex: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
    message: 'A senha precisa ter 1 caracter maíusculo, 1 minúsculo, 1 digito e um caracter especial. Com no mínimo 8 caracteres.'
  },
  number: {
    regex: /^\d+$/,
    message:'Utilize números apenas'
  }
}

const useForm = (type) => {
  const [value, setValue] = React.useState('')
  const [error, setError] = React.useState('')

  function validade(value) {
    if(type === false) return true;
    if(value.length === 0) {
      setError('Preencha um valor')
      return false
    } else if(types[type] && !types[type].regex.test(value)){
      setError(types[type].message)
      return false
    } else {
      setError(null)  
      return true
    }
  }

  function onChange({target}) {
    if(error) {validade(target.value)}
    setValue(target.value)
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validade: () => validade(value),
    onBlur: () => validade(value)
  }
}

export default useForm