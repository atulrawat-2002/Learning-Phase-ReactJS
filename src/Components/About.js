import { useEffect } from 'react';
import User from './User'
import UserClass from './UserClass';


const About = () => {

    useEffect(() => {
        console.log("useEffect called")
        let timer = setInterval(() => {
            console.log("This is setIterval inside the about component")
        }, 1000)

        return function(){
            clearInterval(timer)
        }
    }, [])

    return (
        <>
        <h1>This the About us page</h1>
        <User />
        </>
    )
}

export default About;   