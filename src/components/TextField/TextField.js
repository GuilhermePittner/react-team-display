import './TextField.css'

export const TextField = (props) => {

  // ok, here things can get a bit confusing, let me
  // explain: my input has a property which will call
  // this arrow function "editedValue" everytime the
  // input has changed his value.
  // once it's called, my "setVar" function from
  // Form.js will update the var value.
  const editedValue = (event) => {
    props.keyPress(event.target.value);
  }

  return (
    <div className='textfield-div'>

      <label>{props.label}</label>

      <input type='name' value={props.value} onChange={editedValue} placeholder={props.placeholder}></input>

    </div>
  );
}
