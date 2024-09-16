import React from 'react'
import { createRoot, ReactDOM } from 'react-dom/client'
import App from './App.jsx'
import { Children } from 'react'

const MyApp = () => {
    return (
        <div>Custom App | Chai</div>
    )
}

// const ReactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     Children: 'Click me to visit google'
// }

const anotherElement = (
    <a href='https://google.com' target='_blank'>Visit google</a>
)

const anotherUser = " | chai aur react"

const reactElement = React.createElement(
    'a',
    {
        href: 'https://google.com', target: '_blank'
    },
    'click me to visit google',
    anotherUser
)

createRoot(document.getElementById('root')).render(
    // <App />
    reactElement
)
