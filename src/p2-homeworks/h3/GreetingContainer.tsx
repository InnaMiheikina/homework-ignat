import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array <UserType> // need to fix any
    addUserCallback: (name: string)=> void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState ('') // need to fix any
    const [error, setError] = useState<string | null>(null) // need to fix any

    const setNameCallback = (e:ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value)
        setError(null)// need to fix any
        //setName('') // need to fix
    }
    const addUser = ( ) => {
        setError(null);
        if (name.trim() !== '') {
            addUserCallback(name.trim()); // need to fix
            setName('')
            alert('hello ' + name )
        } else {
            setError( ' Title is required')
        }
    }
// need to fix
    return (
       <><Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={users.length}
        />
           {users.map(u => <div>{u.name}</div>)}
       </>
)
}

export default GreetingContainer
