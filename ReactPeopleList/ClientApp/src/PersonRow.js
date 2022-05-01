import React from 'react';

class PersonRow extends React.Component {

    GetClassName = (age) => {
        let className = '';
        if (age > 65) {
            className = 'bg-danger';
        }
        return className;
    }

    render() {
        const { person, key } = this.props;

        return <tr key={key} className={this.GetClassName(person.age)}>
            <td>{person.firstName}</td>
            <td>{person.lastName}</td>
            <td>{person.age}</td>
        </tr>
    }
}

export default PersonRow;