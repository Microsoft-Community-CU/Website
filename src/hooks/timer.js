import { useState, useEffect } from 'react'

const useTimer = () => {
    let [time, setTime] = useState(new Date().getTime())

    const tick = async () => {
        setTime(new Date().getTime())
    }

    useEffect(() => {
        setTimeout(() => {
            tick()
        }, 1000)
    }, time)

    return time
}

export { useTimer }