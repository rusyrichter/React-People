import React from 'react';
class PersonForm extends React.Component {

    render() {
        return (
            <div className='row bg-light p-4 rounded mb-3'>
                <div className='col-md-3'>
                    <input value={this.props.firstName} onChange={this.props.onFirstNameChange}
                        type="text" placeholder="First Name" name="firstName" className="form-control" />
                </div>
                <div className='col-md-3'>
                    <input value={this.props.lastName} onChange={this.props.onLastNameChange}
                        type="text" placeholder="Last Name" name="lastName" className="form-control" />
                </div>
                <div className='col-md-3'>
                    <input value={this.props.age} onChange={this.props.onAgeChange}
                        type="text" placeholder="Age" name="age" className="form-control" />
                </div>
                <div className="col-md-1">
                    <button onClick={this.props.onAddClick} className="btn btn-primary">Add</button>
                </div>
                <div className="col-md-2">
                    <button onClick={this.props.onClearClick} className="btn btn-warning ml-3">Clear All</button>
                </div>
            </div>
            )
    }
}

export default PersonForm;
