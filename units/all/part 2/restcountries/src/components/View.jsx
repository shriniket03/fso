const View = ({item}) => {
    return (
        <div>
        <h1><b>{item.name.common}</b></h1>
        <p>capital {item.capital[0]}</p>
        <p>area {item.area}</p>
        <h3><b>languages:</b></h3>
        <ul>{Object.values(item.languages).map((language,i)=> <li key={i}>{language}</li>)}</ul>
        <img src={item.flags.png}/>
        </div>
    )
}

export default View