const Form = (props) => {
    return (
        <form>
        <div>
          name: <input value={props.newName} onChange={props.handleChange} />
          <br></br>
          number: <input value={props.newNumber} onChange={props.handlePhoneChange} />
        </div>
        <div>
          <button type="submit" onClick={()=>props.onClickAction(props.newName,props.newNumber)}>add</button>
        </div>
      </form>
    )
}

export default Form