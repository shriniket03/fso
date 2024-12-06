import methods from '../services/phone'

const Part = ({name,number,id,deleteHandler}) => {
    return  <p>{name} {number} <button onClick={()=>deleteHandler(id,name)}>Delete</button></p> 
}

const List = ({persons, filter2, deleter}) => {
    return (
        <div>
            {persons.filter(person=>person.name.toLowerCase().includes(filter2)).map(person=><Part key={person.id} name={person.name} number={person.number} id={person.id} deleteHandler={deleter}/>)}
        </div>
    )
}

export default List