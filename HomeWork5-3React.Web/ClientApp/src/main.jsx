import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import PersonTable from './PersonTable'
import 'bootstrap/dist/css/bootstrap.min.css';

class MyFirstComponent extends React.Component {
    render() {
        return <h1>Hello World</h1>
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <PersonTable />
)



  