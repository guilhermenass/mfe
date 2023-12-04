import React from 'react'
import MarketingApp from '../components/MarketingApp'
import Header from '../components/Header'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min'
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

export default () => {
    return (
        <BrowserRouter>
            <StylesProvider generateClassName={generateClassName}>
                <div>
                    <Header />
                    <MarketingApp />
                </div>
            </StylesProvider>
        </BrowserRouter>
    )
}