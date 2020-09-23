import React, { useState, useEffect } from 'react';

export default function GetIgnore() {
    const [gitIgnorebranch, setgitIgnorebranch] = useState(['unknown']);
    useEffect(() => {
        queryCheckGitIgnore2();
    }, []);

    const queryCheckGitIgnore2 = () => {
        fetch('/system-environment/checkGitIgnore')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('json', json);
                setgitIgnorebranch(json.gitIgnoreTests);
            })
            .catch(function(ex) {
                console.log('fail', ex);
            });
    };

    return (
        <React.Fragment>
            <h2>CheckGitIgnore</h2>

            <table>
                <thead>
                    <tr>
                        <th>Branches</th>
                        <th>missingValue</th>
                    </tr>
                </thead>
                <tbody>
                    {gitIgnorebranch.map((nowBranch, index) => {
                        return (
                            <tr key={index}>
                                <td> {nowBranch.branch}</td>
                                <td> {nowBranch.missing}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={queryCheckGitIgnore2}>GitIgnore</button>
        </React.Fragment>
    );
}
