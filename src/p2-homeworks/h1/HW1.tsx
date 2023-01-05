import React from 'react'
import {Message} from "./Message";

const messageData = {
    avatar: "https://klike.net/uploads/posts/2019-05/1556945414_2.jpg",
    name: 'Inna',
    message: 'всем привет',
    time: '22:00',
}

function HW1() {
    debugger
    return (
        <div>
            <hr/>
            homeworks 1

            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1;
