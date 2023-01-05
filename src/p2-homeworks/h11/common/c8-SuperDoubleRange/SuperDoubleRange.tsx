import React from 'react'
import SuperRange from "../c7-SuperRange/SuperRange";
import {Slider} from "@mui/material";

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: number[]) => void
    value?: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки

    const handleChange = (event: Event, newValue: number | number[]) => {
        onChangeRange && onChangeRange(newValue as Array<number>)
    };
    return (
        <>
            <Slider
                value={value}
                onChange={handleChange}
            />
        </>
    )
}

export default SuperDoubleRange
