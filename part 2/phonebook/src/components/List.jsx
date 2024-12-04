const Part = ({name,number}) => {
    return <p>{name} {number}</p>
}

const List = ({persons, filter2}) => {
    return (
        <div>
            {persons.filter(person=>person.name.toLowerCase().includes(filter2)).map(person=><Part key={person.id} name={person.name} number={person.number}/>)}
        </div>
    )
}

export default List