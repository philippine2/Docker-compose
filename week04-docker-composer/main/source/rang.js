import React, { useState, useEffect } from 'react';

export default function Rang() {
    const youRandataI = {
        file: 'unknown',
        result: 'unknown',
        program: 'unknown',
        server: 'unknown',
        directory: 'unknown',
        home: 'unknown',
        hostname: 'unknown'
    };

    const [youRangdata, setyouRangdata] = useState(youRandataI);
    useEffect(() => {
        serverYouRang2();
    }, []);

    const serverYouRang2 = () => {
        fetch('/system-environment/you-rang')
            .then(response => response.json())
            .then(result => {
                setyouRangdata(result);
            })
            .catch(function(ex) {
                console.log('fail', ex);
            });
    };
    return (
        <React.Fragment>
            <h2>Get You Rang from System-environment</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>program</td>
                        <td>{youRangdata.program}</td>
                    </tr>
                    <tr>
                        <td>file</td>
                        <td> {youRangdata.file}</td>
                    </tr>
                    <tr>
                        <td>result</td>
                        <td id="you-rang-result"> {youRangdata.result}</td>
                    </tr>
                    <tr>
                        <td>server</td>
                        <td>{youRangdata.server}</td>
                    </tr>
                    <tr>
                        <td>directory</td>
                        <td>{youRangdata.directory}</td>
                    </tr>
                    <tr>
                        <td>hostname</td>
                        <td>{youRangdata.hostname}</td>
                    </tr>
                    <tr>
                        <td>home</td>
                        <td>{youRangdata.home}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={serverYouRang2}>You Rang</button>
        </React.Fragment>
    );
}
