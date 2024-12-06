const Notification = ({message,type}) => {
    let notifStyle = {
        background: 'lightgrey',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    notifStyle = (type!=="error") ? {...notifStyle, color: 'green',} : {...notifStyle, color:'red'}

    if (message===null) {
        return null
    }

    else {
        return <div style={notifStyle}>{message}</div>
    }
}

export default Notification