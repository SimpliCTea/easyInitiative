import React, { Component } from 'react'

export class InitiativeList extends Component {

    render() {
        const initOrder = this.props.initOrder;

        console.log(initOrder);
        const initItems = initOrder.map((charName) => {
            return (
                <li key={charName}>
                    <span>{charName}</span>
                </li>
            )
        });
        console.log(initItems);

        return (
            <div>
                <ul name='initiativeList'>
                    {initItems}
                </ul>
            </div>
        )
    }
}

export default InitiativeList
