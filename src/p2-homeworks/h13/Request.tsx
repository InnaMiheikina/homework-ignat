import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";
import {RequestsAPI} from "./RequestsAPI ";

const Request = () => {
    const [value, setValue] =useState<boolean>(false)

    const newValue = ()=> {
        setValue(true)
        RequestsAPI.post(true)
    }

    return (
        <div>
            <button>Button</button>
            <input type={"checkbox"} checked={value} onClick={newValue}/>
        </div>
    );
};

export default Request;

/*
const newValueTC = (value:boolean)=> (dispatch:Dispatch)=> {
    RequestsAPI.post()
}*/
