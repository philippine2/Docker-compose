import React, { useState, useEffect } from 'react';

export default function SelectRepo() {
    const list = {
        workingDir: 'unknown',
        asArray: ['unknown']
    };
    const [selectRepo, setRepos] = useState(list);
    const [selectRepo3, setRepos2] = useState(list);
    useEffect(() => {
        getRepoNames();
    }, []);

    const getRepoNames = async () => {
        fetch('/system-environment/getRepoNames')
            .then(response => response.json())
            .then(result => {
                setRepos(result);
            })
            .catch(function(ex) {
                console.log('fail', ex);
            });

        /*try {
            let response = await fetch('/system-environment/getRepoNames')
            let result = await response.json()
            console.log(result)
        } catch (ex) {
            console.log('fail', ex);
        }
        */
    };
    const selectRepo2 = async () => {
        const workingDirSelect = document.getElementById('workingDirSelect');
        const newWorkingDir =
            workingDirSelect.options[workingDirSelect.selectedIndex].text;

        function makeParams(params) {
            var esc = encodeURIComponent;
            return (
                '?' +
                Object.keys(params)
                    .map(k => esc(k) + '=' + esc(params[k]))
                    .join('&')
            );
        }

        const url =
            '/system-environment/setWorkingDir' +
            makeParams({ newWorkingDir: newWorkingDir });
        fetch(url)
            .then(response => response.json())
            .then(result => {
                setRepos2(result);
            })
            .catch(function(ex) {
                console.log('fail', ex);
            });
    };

    return (
        <React.Fragment>
            <h4 className="message">get repos names</h4>
            <table>
                <thead>
                    <tr>
                        <th className="branchName"> Repo Lists</th>
                        <th>Value</th>
                    </tr>
                    <tr>
                        <th className="workinhDir"> Working Directory</th>
                        <th>{selectRepo3.workingDir}</th>
                    </tr>
                </thead>
                <tbody>
                    {selectRepo.asArray.map((repos, index) => {
                        return (
                            <tr key={index}>
                                <td> RepoName</td>
                                <td id="repos">{repos}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h4 className="message">Select a WorkingDir</h4>
            <div>
                <select id="workingDirSelect">
                    {selectRepo.asArray.map((repos, index) => {
                        return (
                            <option value="0" key={index}>
                                {repos}
                            </option>
                        );
                    })}
                </select>

                <button id="button1" className="byourang" onClick={selectRepo2}>
                    click to set the WorkingDir
                </button>
            </div>
        </React.Fragment>
    );
}
