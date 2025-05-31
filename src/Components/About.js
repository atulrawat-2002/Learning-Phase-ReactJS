import { useEffect } from 'react';
import User from './User'

const About = () => {
     
    
    useEffect(() => {
        console.log("useEffect called")
    }, [])

    return (
        <>
        <h1>This the About us page</h1>
        <User />
        </>
    )
}

export default About;   