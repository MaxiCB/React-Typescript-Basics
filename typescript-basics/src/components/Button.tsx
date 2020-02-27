import * as React from 'react';

interface Props {
    title: String;
    function: () => void;
}

const Button: React.FunctionComponent<Props> = (props) => {

    return (
        <>
            <button onClick={e => props.function()}>
                {props.title}
            </button>
        </>
    )
}

export default Button