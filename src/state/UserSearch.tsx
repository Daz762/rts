import {useState} from "react";
import React from "react";

const users = [
    {name: 'Darren', age: 20},
    {name: 'Alex', age: 20},
    {name: 'James', age: 20}
]



const UserSearch: React.FC = () => {
    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    const userSearchButtonClicked = () => {
        const foundUser = users.find((x) => {
            return x.name.toLowerCase() === name.toLowerCase()
        })

        setUser(foundUser)
    }

    // callback function used for onChange
    // user && user.name only use value of user.name if user is NOT undefineds
    return <div>
        UserSearch
        <input value={name} onChange={e => setName(e.target.value)} />
        <button onClick={userSearchButtonClicked}>Search</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch