import { BlueWordContainer } from "./blueWordElements";
import { useState } from 'react';

function BlueWordComponent({word}) {
    const [showWord, setShowWord] = useState(true);

    const handleClick = () => {
        setShowWord(!showWord);
    };

    return (
        <div onClick={handleClick}>
            {showWord ? (
                <BlueWordContainer>{word}</BlueWordContainer>
            ) : (
                <img src='https://trlauvtqyqikookhwwzs.supabase.co/storage/v1/object/public/lyricimgs//House_of_leaves.jpg' alt="House of Leaves"></img>
            )}
        </div>
    )
}

export default BlueWordComponent;