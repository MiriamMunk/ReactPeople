import React from 'react';

class PersonForm extends React.Component {
    render() {
        const { firstName, lastName, age, onAddClick, onClearAllClick, onFNameChange, onLNameChange, onAgeChange } = this.props;
        return (
            <div className="container mt-5">
                <div className="row jumbotron">
                    <div className="col-md-3">
                        <input type="text" placeholder="First Name" name="firstName" className="form-control" value={firstName} onChange={onFNameChange} />
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Last Name" name="lastName" className="form-control" value={lastName} onChange={onLNameChange}/>
                    </div>
                    <div className="col-md-3">
                        <input type="text" placeholder="Age" name="age" className="form-control" value={age} onChange={onAgeChange}/>
                    </div>
                    <div className="col-md-3">
                        <button onClick={onAddClick} className="btn btn-primary">Add</button>
                        <button onClick={onClearAllClick} className="btn btn-warning ml-3">Clear All</button>
                    </div>
                </div>
            </div>)
    }
}
export default PersonForm;
