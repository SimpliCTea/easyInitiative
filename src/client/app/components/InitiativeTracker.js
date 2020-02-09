import React, { Component } from 'react'
import InitiativeForm from './InitiativeForm'
import InitiativeList from './InitiativeList'

export class InitiativeTracker extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            initOrder: ['Flint', 'Rai'],
            charDict: {
                Flint: {
                    charName: 'Flint',
                    charInit: 17
                },
                Rai: {
                    charName: 'Rai',
                    charInit: 12
                }
            }
        }
    }

    handleInitSubmit(event) {
        event.preventDefault();

        const charDict = this.state.charDict;
        charDict[event.target.charName.value] = {
            charName: event.target.charName.value,
            charInit: event.target.charInit.value
        }
        this.setState({
            charDict: charDict
        });
        this.updateOrder();
    }

    updateOrder() {
        const oldInit = this.state.initOrder;
        const charInfo = this.state.charDict;
        let initDict = {};
        /*Object.keys(charInfo).map((char) => {
            currentChar = charInfo[char];
            initDict[currentChar.charInit] = currentChar.charName;
        });*/
        
        for (let char in charInfo) {
            let currentChar = charInfo[char];
            initDict[currentChar.charInit] = currentChar.charName;
        }
        const initList = Object.keys(initDict).sort((a,b) => b-a);
        const newOrder = initList.map(initiative => initDict[initiative]);
        this.setState({
            initOrder: newOrder
        })
    }
    
    render() {


        return (
            <div>
                <div>
                    <InitiativeForm
                    onSubmit = {(e) => this.handleInitSubmit(e)}
                    />
                </div>
                <div>
                    <InitiativeList 
                      initOrder = {this.state.initOrder}
                    />
                </div>
            </div>
        )
    }
}

export default InitiativeTracker
