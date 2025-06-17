import React from 'react';
import said from './constant/data'



function H(props) {
    const hmed = said.said
    console.log(hmed);
    
    return (
        <div>
            
            {
                hmed.map((e, index) => (
                    <div key={index}>
                        <h1>{e.name}</h1>
                    </div>
                ))

            }
        </div>
    );
}

export default H;