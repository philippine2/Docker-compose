import React, { useState, useEffect } from 'react';

export default function YouRangroutetester() {
    const YouRangroutetesterData = {
        file: 'unknown',
        result: 'unknown',
        program: 'unknown',
        server: 'unknown',
        directory: 'unknown',
        home: 'unknown',
        hostname: 'unknown',
        branches: ['unknown'],
        badFiles: [{ badFile: 'unknown', branch: 'unknown' }],
        gitIgnoreTests: [{ branch: 'unknown', missing: ['none'] }]
    };

    const [youRangdataRT, setyouRangdataRT] = useState(YouRangroutetesterData);
    useEffect(() => {
        serverYouRang3();
        console.log('hi');
    }, []);

    const serverYouRang3 = () => {
        fetch('/route-tester/you-rang')
            .then(response => response.json())
            .then(result => {
                setyouRangdataRT(result);
            })
            .catch(function(ex) {
                console.log('fail', ex);
            });
    };
    return (
        <React.Fragment>
            <h2>Get You Rang from Route Tester </h2>
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
                        <td>{youRangdataRT.program}</td>
                    </tr>
                    <tr>
                        <td>file</td>
                        <td> {youRangdataRT.file}</td>
                    </tr>
                    <tr>
                        <td>result</td>
                        <td id="you-rang-result"> {youRangdataRT.result}</td>
                    </tr>
                    <tr>
                        <td>server</td>
                        <td> {youRangdataRT.server}</td>
                    </tr>
                    <tr>
                        <td>directory</td>
                        <td>{youRangdataRT.directory}</td>
                    </tr>
                    <tr>
                        <td>hostname</td>
                        <td>{youRangdataRT.hostname}</td>
                    </tr>
                    <tr>
                        <td>home</td>
                        <td>{youRangdataRT.home}</td>
                    </tr>
                </tbody>
            </table>
            <button onClick={serverYouRang3}>You Rang</button>
        </React.Fragment>
    );
}
