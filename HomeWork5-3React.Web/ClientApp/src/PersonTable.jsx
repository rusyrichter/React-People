import React from 'react';
import PersonForm from './Person Form'
import PersonRow from './PersonRow'
class PersonTable extends React.Component {

    state = {

        firstName: '',
        lastName: '',
        age: '',

        people: [],
    }

    onAddClick = () => {
        const copy = [...this.state.people];

        const person = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: this.state.age
         
        };

        copy.push(person);
        this.setState({
            people: copy,

            firstName: '',
            lastName: '',
            age: ''
        });

    }
    onFirstNameChange = (e) => {
        this.setState({ firstName: e.target.value });
    }
    
    onLastNameChange = (e) => {
        this.setState({ lastName: e.target.value });
    }

    onAgeChange = (e) => {
        this.setState({ age: e.target.value });
    }
    onClearClick = () => {
        this.setState({ people: [] });
    }

    

    render() {

        return (

            <div className="container mt-5">
                <PersonForm onAddClick={this.onAddClick} onFirstNameChange={this.onFirstNameChange}
                    onLastNameChange={this.onLastNameChange} onAgeChange={this.onAgeChange} onClearClick={this.onClearClick}
                    firstName={this.state.firstName} lastName={this.state.lastName} age={this.state.age}/>
                <table className='table table-hover table-bordered' style={{ marginTop: "25px" }}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody> 
                       
                            <PersonRow people={this.state.people}/>       
                      
                                              
                    </tbody>
                </table>
            </div>
        )
    }

}


export default PersonTable;