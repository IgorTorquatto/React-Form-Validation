import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as  yup from 'yup';
import { useState } from 'react';

import styles from './form.module.css';

const schema = yup.object({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('Email-inválido'),
  password: yup.string().required('Senha obrigatória').min(6,'No mínimo 6 caracteres'),
  password_confirmation: yup.string().oneOf([
    null, // verifica se é null
    yup.ref('password'), //verifica se é igual ao campo yup referenciado
  ],'As senhas precisam ser iguais')
}).required();

function App() {
 
  const [isSucess,setIsSucess] = useState(false);

  //Conceta o react-hook-form ao schema  
  const { register,handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  const onSubmit = (data)=>{
    //Só executa handleSubmit se o formulário segue todas as regras de validação
    console.log("Formulário submetido");
    setIsSucess(true);
    console.log(data);
  }

  return (
    <>
    <h1>Formulário</h1>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contentForm}>
        <div className={styles.formGroup}>
          <input 
            type="text" 
            placeholder="Insira seu nome"
            {...register("nome")}
            className={(errors.nome) ? `${styles.inputError}` : ''}
          />
          <span className={styles.labelError}>{errors.nome?.message}</span>
        </div>
        <div className={styles.formGroup}>
          <input 
            type="email" 
            placeholder="Insira seu e-mail"
            {...register("email")}
            className={(errors.email) ? `${styles.inputError}` : ''}
          />
          <span className={styles.labelError}>{errors.email?.message}</span>
        </div>
        <div className={styles.formGroup}>
          <input 
            type="password" 
            placeholder="Insira sua senha"
            {...register("password")}
            className={(errors.password) ? `${styles.inputError}` : ''}
          />
          <span className={styles.labelError}>{errors.password?.message}</span>
        </div>
        <div className={styles.formGroup}>
          <input 
            type="password" 
            placeholder="Confirmar sua senha"
            {...register("password_confirmation")}
            className={(errors.password_confirmation) ? `${styles.inputError}` : ''}
          />
          <span className={styles.labelError}>{errors.password_confirmation?.message}</span>
        </div>
        <button type="submit">Enviar Formulário</button>

        {
          isSucess && <p className={styles.sucessMessage}>Formulário enviado com sucesso</p>
        }
    </form>
   </>
  )
}

export default App
