//rafce
import React from 'react'

const Random = () => {
    const emojis = ['🎈', '🎃', '🎁', '🎄', '😂', '😵', '💀', '👽']
    const index = Math.floor(Math.random() * 8);

    // let emoji;
    // if(index%2===0){
    //     emoji = emojis[index];
    // }
    // else{
    //     emoji = 'not an emoji';
    // }

    return (
        <div>
            {/* {index % 2 === 0 ? emojis[index] : 'not an emoji'} */}
            { index%2 === 0 && emojis[index]}

            {
                emojis.map((emoji, ind) => {
                    if(ind % 2===0) {
                        return <li key={ind} >{emoji}</li>
                    }
                })
            }

            {/* {emoji} */}
            {/* {emojis[index]} */}
        </div>
    )
}

export default Random