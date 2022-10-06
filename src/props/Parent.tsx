import { ChildAsFC } from './Child'
import React from "react";

const Parent = () => {
    return <ChildAsFC color={"red"} onClick={() => console.log('clicked')}>
        testChildPassedToParent
    </ChildAsFC>
}

export default Parent