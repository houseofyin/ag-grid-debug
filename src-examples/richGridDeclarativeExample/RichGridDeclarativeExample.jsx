import React, {Component} from "react";
import {AgGridReact} from "@ag-grid-community/react";

import {ClientSideRowModelModule} from "@ag-grid-enterprise/all-modules";

const modules = [ClientSideRowModelModule];

const columnDefs= [
    {
        headerName: '#',
        field: 'initiativeRound',
        width: 150,
    },
    {
        headerName: 'Name',
        field: 'name',
        width: 150,
    },
    {
        headerName: 'DOB',
        field: 'dob',
        width: 100,
    },
    {
        headerName: 'Skills',
        field: 'skills',
        flex: 1,
        minWidth: 200,
    },
    {
        headerName: 'Proficiency',
        field: 'proficiency',
        width: 125,
    },
    {
        headerName: 'Mobile',
        field: 'mobile',
        width: 150,
    },
    {
        headerName: 'Address',
        field: 'address',
        width: 150,
    },
];

const rowData = [
    {
        initiativeRound: "One",
        name: "John Doe",
        dob: "1/1/1901",
        skills: "Programming",
        proficiency: "ag-grid",
        mobile: "867-5309",
        address: "1600",
    },
    {
        initiativeRound: "Two",
        name: "Jane Doe",
        dob: "2/2/1902",
        skills: "Programming",
        proficiency: "ag-grid",
        mobile: "867-5309",
        address: "1600",
    },

]

export default class RichGridDeclarativeExample extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{width: '100%'}}>
                <h1>Rich Grid with Declarative Markup Example</h1>
                <div style={{marginTop: 10}}>
                    <div style={{height: 650, width: '100%'}} className="ag-theme-alpine">
                        <AgGridReact
                            columnDefs={columnDefs}
                            rowData={rowData}
                            modules={modules}
                        >
                        </AgGridReact>
                    </div>
                </div>
            </div>
        );
    }
}
