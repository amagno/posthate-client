import React from 'react'
import { gql, graphql } from 'react-apollo'


const Users = ({ data }) => {
    if(data.loading) {
        return (
            <h3>Loading..........</h3>
        )
    }

    return (
        <div style={{ marginTop: '20px'}}>
            <ul>
            {data.users.map(user => (

                <li key={user.id}>
                    <span style={{ display: 'block', borderTop: '1px solid black', width: '300px' }}></span>
                    <span style={{ display: 'block' }}>{user.name}</span>
                    <span style={{ display: 'block' }}>{user.email}</span>
                    <span style={{ display: 'block' }}>{user.password}</span>                    
                    <span style={{ display: 'block', borderBottom: '1px solid black', width: '300px' }}></span>                                   
                </li>
            ))}
            </ul>
        </div>
    )
}
const usersQuery = gql`
    query usersQuery {
        users {
            id
            name
            email
            password
        }
    }
`
//export default Users
export default graphql(usersQuery)(Users)