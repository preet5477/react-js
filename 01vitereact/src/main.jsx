import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
    return(
        <div>
            <h1>Custom app !!</h1>
        </div>
    )
}

const anotherElement = (
        <a href = "https://chatgpt.com/" target='_blank'>chatgpt.com</a>
)
/*
const reactElement =  React.createElement(
    'a',
    {href: 'http://google.com',target:'_blank'},
    'click to visit google'
)
*/
ReactDOM.createRoot(document.getElementById('root')).
render(
    <App />
)