import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import {Box} from "@mui/material";

function HW11() {
    const [value1, setValue1] = useState<number>(0)
    const [value2, setValue2] = useState(100)
    console.log(value1)

    const superRangeHandler = (value: number)=> {
        setValue1(value)
   }
   const doubleRangeHandler = (value: number[])=> {
    debugger
        setValue1(value[0])
       setValue2(value[1])
   }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
             <Box width={300}>
            <div>
                <span>{value1}</span>
                <SuperRange
                    value={value1}
                    onChangeRange={superRangeHandler}
                />
            </div>
            <div>
                <span>{value1}</span>
                <SuperDoubleRange
                      value={[value1,value2]}
                    onChangeRange={doubleRangeHandler}// сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>
             </Box>


        </div>
    )
}

export default HW11
