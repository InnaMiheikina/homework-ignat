import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string// need to fix any
    setNameCallback:(e:ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: ()=>void // need to fix any
    error: string | null// need to fix any
    totalUsers: any // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = ({name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)
    console.log('error: ', error)
    return (
        <div>
            <SuperInputText value={name}
                   onChange={setNameCallback}
                   className={inputClass}/>
            {error && <span  className={s.errorMessage}>{error}</span>}
            <SuperButton className={s.button} onClick={addUser}>add</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting;
