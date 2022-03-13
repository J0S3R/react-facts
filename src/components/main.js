import React from 'react';
import '../style.css';

function Main(){
    const main = (
        <main>
            <h1 className='main--title'>Fun facts about React</h1>
            <ul className='main--facts'>
                <li>Was first released in 2013</li>
                <li>Was orginally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )

    return (main);
}

export default Main;