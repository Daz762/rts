import {useState, useRef, useEffect} from "react";
import React from "react";
import {Simulate} from "react-dom/test-utils";
import input = Simulate.input;

const users = [
    {name: 'Darren', age: 20},
    {name: 'Alex', age: 20},
    {name: 'James', age: 20}
]



const UserSearch: React.FC = () => {
    const inputRef = useRef<HTMLInputElement | null>(null) // might point to null but might point to input element
    const [name, setName] = useState('')
    const [user, setUser] = useState<{ name: string, age: number } | undefined>()

    useEffect(() => {
        // can get rid of this block by using inputRef.current?.focus()
        if (!inputRef.current) { // makes sure inputRef is defined - type guard
            return
        }
        inputRef.current.focus()
    }, [])

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
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        <button onClick={userSearchButtonClicked}>Search</button>
        <div>
            {user && user.name}
            {user && user.age}
        </div>
    </div>
}

export default UserSearch