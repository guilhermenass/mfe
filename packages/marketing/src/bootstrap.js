import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// função para startar a aplicação
const mount = (element) => {
    ReactDOM.render(
        <App />,
        element
    )
}

// se estiver em modo DESENVOLVIMENTO e em isolamento, chamar a função de mount imediatamente
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

// se estiver rodando a aplicação do CONTAINER, exportar a função mount
export { mount }