import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>()
    const [show, setShow] = useState<boolean>(true)

    const stop = () => {
        clearTimeout(timerId)
    }//Функция clearTimeout() отменяет ранее установленный вызов функции setTimeout().
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
             setDate(new Date())
        }, 1000)
        setTimerId(id)
    } //setInterval позволяет вызывать функцию регулярно, повторяя вызов через определённый интервал времени

    const onMouseEnter = () => {
       setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date?.toLocaleTimeString() || <br/>  // чтобы не скакала полоска когда не видно даты
    const stringDate = date?.toLocaleDateString() || <br/>

    return (
        <div>
            <div
                onMouseEnter={onMouseEnter}//Событие mouseenter вызывается в Element когда указательное устройство (обычно мышь) изначально перемещается так, что его горячая точка находится в пределах элемента
                onMouseLeave={onMouseLeave}  //выход курсора за их границы
            >
                {stringTime}
            </div>

            {show ? (
                <div>
                    {stringDate}
                </div>
            ) : (
                <br/>
                )}

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
