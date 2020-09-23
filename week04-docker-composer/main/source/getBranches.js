import React, { useState, useEffect } from 'react';

export default function GetAllBranches() {
    const [branches, setBranches] = useState(['unknown']);

    useEffect(() => {
        queryGetBranches2();
    }, []);

    const queryGetBranches2 = () => {
        fetch('/system-environment/getBranches')
            .then(function(response) {
                return response.json();
            })
            .then(function(json) {
                console.log('json', json);
                setBranches(json.asArray);
            })
            .catch(function(ex) {
                console.log('fail', ex);
            });
    };

    return (
        <React.Fragment>
            <h2>Get branches</h2>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {branches.map((branch, index) => {
                        return (
                            <tr key={index}>
                                <td>Branch</td>
                                <td id="getBranches-result">{branch}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <button onClick={queryGetBranches2}>GetBranches</button>
        </React.Fragment>
    );
}
