import { useState } from "react";
import { ClickHandler } from "./ClickHandler";

export const Message = () => {

    const [message, setMessage] = useState('Welcome Visitor');

    return (
        <div>
            <h1>{ message }</h1>
            <ClickHandler />
        </div>
    );
}