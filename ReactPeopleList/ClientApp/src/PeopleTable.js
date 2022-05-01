import React from 'react';
import PersonForm from './PersonForm';
import PersonRow from './PersonRow';

class PeopleTable extends React.Component {

    state = {
        firstName: '',
        lastName: '',
        age: '',
        people: []
    }

    GenerateTable = () => {
        if (this.state.people.length === 0) {
            return <h1>No people added yet! Add some people!</h1>
        }
        else {
            return <table className='table table-striped table-bordered'>
                <thead className='table-dark'>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.people.map((p, k) => <PersonRow person={p} key={k} />)}
                </tbody>
            </table >

        }
    }

    addPerson = () => {
        const { firstName, lastName, age, people } = this.state;

        const person = {
            firstName,
            lastName,
            age
        }
        const copy = [person, ...people];
        this.setState({ people: copy, firstName: '', lastName: '', age: '' });
    }

    clearAll = () => {
        this.setState({ people: [] });
    }

    onAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    onLNameChange = e => {
        this.setState({ lastName: e.target.value });
    }

    onFNameChange = e => {
        this.setState({ firstName: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <PersonForm firstName={this.state.firstName}
                    lastName={this.state.lastName}
                    age={this.state.age}
                    onClearAllClick={this.clearAll}
                    onAddClick={this.addPerson}
                    onFNameChange={this.onFNameChange}
                    onLNameChange={this.onLNameChange}
                    onAgeChange={this.onAgeChange} />

                {this.GenerateTable()}
            </div>)
    }
}
export default PeopleTable;
