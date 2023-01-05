import React from 'react'
import s from './Affairs.module.css'
import {AffairPriorityType, AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";


type AffairPropsType = {
    affair: AffairType// need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props.affair._id)
    }// need to fix
    const priorityClass = s.item + ' ' + s[props.affair.priority]

    return (
        <div className={s.affair}>
            <div className={s.item}>{props.affair.name}</div>
            <div className={priorityClass}>{props.affair.priority}</div>
            <SuperButton onClick={deleteCallback} className={s.item + ' ' + s.button}>X</SuperButton>
        </div>
    )
}

export default Affair;
