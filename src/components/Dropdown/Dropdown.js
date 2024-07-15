import './Dropdown.css'

export const Dropdown = (props) => {
    return (
        <div className='dropdown-div'>
            <label> {props.label} </label>

            <select value={props.value} onChange={event => props.keyPress(event.target.value)}>

                { props.teams.map(item => <option key={item}>{item}</option> ) }
                
            </select>

        </div>
    )
}
