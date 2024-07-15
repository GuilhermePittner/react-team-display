import { useState } from 'react';
import Button from '../Button';
import Dropdown from '../Dropdown';
import TextField from '../TextField';
import './Form.css'

export const Form = (props) => {

    // here i'm basically creating four variables
    // (name, role and image), and their value is: ''.

    // in order to modify their value, I need to call
    // their setter value (setName, setRole, setImage).
    const [name, setName] = useState('');
    const [role, setRole] = useState('');
    const [image, setImage] = useState('');
    const [team, setTeam] = useState('Counter Strike');


    // this functions is called after pressing the button.
    // my variables aforementioned are used here.
    const savingTeam = (e) => { 
        e.preventDefault();

        // check if input fields isn't empty.

        props.savingUser({
            name,
            role,
            image,
            team
        })
    }

    const teams = ['Counter Strike', 'Rocket League', 'Fortnite'];

    return (
        <section className='form-section'>

            <form onSubmit={savingTeam}>

                <h2>Fill the form below to create a card</h2>

                <TextField label="Name" placeholder="Insert name here..." value={name} keyPress={value => setName(value)} />
                <TextField label="Role" placeholder="Insert role here..." value={role} keyPress={value => setRole(value)} />
                <TextField label="Image" placeholder="Insert image url here..." value={image} keyPress={value => setImage(value)} />
                
                <Dropdown label="Team" teams={teams} value={team} keyPress={value => setTeam(value)} />

                <Button>
                    Insert Team
                </Button>

            </form>

        </section>
    )
}
