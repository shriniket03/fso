import View from './View'
import {setState} from 'react'

const Display = ({list2,setCountries}) => {

    const clickHandler = (elem) => {
        setCountries([elem])
    }

    if (list2.length===0) {
        return null;
    }
    else if (list2.length>10) {
        return <div><p>Too many matches, specify another filter</p></div>
    }

    else if (list2.length>1 && list2.length<=10) {
        return <div>{list2.map((item,i) => <p key={i}>{item.name.common} <button onClick={()=>clickHandler(item)}>Show</button></p>)}</div>
    }

    else {
        const item = list2[0]
        return (
            <div>
                <View item={item}/>
            </div>
        )
    }
}

export default Display