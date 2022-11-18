import React, { useEffect, useHistory } from 'react'
import jwt from 'jsonwebtoken'

const Dashboard = () => {
    const history = useHistory()

    const populateQuote = async ()=> {
        const req = await fetch('/api/qoute',{
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })

        const data = req.json()
        console.log(data)
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const user = jwt.decode(token)
            if (!user) {
                localStorage.removeItem('token')
                history.replace('/login')
            } else {
                populateQuote()
            }
        }
    }, [])
    return (
        <div>Dashboard</div>
    )
}

export default Dashboard