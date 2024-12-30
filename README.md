# Validação de Formulários com React

Este projeto tem como objetivo principal aprender e entender a utilização da validação de formulários com React utilizando as bibliotecas `react-hook-form` e `yup`.

## Introdução

Quando precisamos usar formulários na nossa aplicação, é essencial validá-los tanto no front-end quanto no back-end. Fazer isso manualmente apenas com JavaScript pode ser trabalhoso e inseguro. Por isso, utilizamos ferramentas como:

- **React Hook Form**: Uma biblioteca leve e eficiente para lidar com formulários no React, com algumas limitações.
- **Yup**: Uma poderosa biblioteca para criar schemas de validação de formulários.

## Funcionalidades

Neste projeto, abordamos:
1. Criação do formulário HTML no arquivo `App.jsx`.
2. Instalação e configuração do `react-hook-form`.
3. Integração com o `yup` via `@hookform/resolvers`.
4. Definição do schema de validação com o `yup`.
5. Captura e exibição de erros de validação no front-end.

## Passos para Reproduzir o Projeto

### 1. Instalar as dependências

Execute os seguintes comandos para instalar as bibliotecas necessárias:

```bash
yarn add react-hook-form
```

```bash
yarn add @hookform/resolvers yup
```

### 2. Criar o HTML do Formulário

O formulário HTML foi escrito no arquivo `App.jsx`. Nele, foram definidos os campos de entrada para nome, e-mail, senha e confirmação de senha, além de mensagens de erro e estilização condicional.

### 3. Importar e Configurar as Bibliotecas

Importamos os seguintes itens no arquivo `App.jsx`:

```javascript
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
```

### 4. Definir o Schema de Validação com Yup

Utilizamos o `yup` para definir as regras de validação, como campos obrigatórios, validações de formato e correspondência de senhas.

### 5. Integração do Schema com React Hook Form

Conectamos o `react-hook-form` ao schema do `yup` usando o `yupResolver`, permitindo capturar erros de validação e exibi-los no formulário.

```javascript
const { register, handleSubmit, formState: { errors } } = useForm({
  resolver: yupResolver(schema)
});
```

### 6. Submissão e Exibição de Erros

Na função `onSubmit`, é possível acessar os dados do formulário através do objeto `data` fornecido pelo `react-hook-form`, sem a necessidade de criar estados individuais para cada campo.

## Observação

Com o `react-hook-form`, não é necessário criar estados separados para cada campo de input. A biblioteca cria automaticamente um objeto com os dados enviados ao formulário, acessível pela função `onSubmit`.

## Imagens

Tela Inicial:
![Formulário](./src/assets/Captura%20de%20Tela%20(47).png)

Apresentação de erros:
![Formulário](./src/assets/Captura%20de%20Tela%20(48).png)

![Formulário](./src/assets/Captura%20de%20Tela%20(49).png)

Envio, com sucesso , do formulário após validação:

![Formulário](./src/assets/Captura%20de%20Tela%20(50).png)


## Conclusão

Este projeto é uma introdução prática ao uso de `react-hook-form` e `yup` para validação de formulários no React, demonstrando como simplificar e tornar mais segura a manipulação de dados no front-end.
