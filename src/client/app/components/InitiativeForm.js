import React from 'react'

function InitiativeForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            <input type='text' name='charName'></input>
            <input type='text' name='charInit'></input>
            <input type='submit' name='submitInitiative' value='Submit'></input>
        </form>
    )
}

export default InitiativeForm
