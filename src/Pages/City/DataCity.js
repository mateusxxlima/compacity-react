import React, { Component } from 'react'

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Cidade</th>
                <th>Longitude</th>
                <th>Latitude</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.allCities.map((line, index) => {
        
        return (
            <tr key={index}>
                <td>{line.nome}</td>
                <td>{line.longitude}</td>
                <td>{line.latitude}</td>             
            </tr>
        );
    });

    return(
        <tbody>
            { linhas }
        </tbody>
    );
}

class DataCity extends Component {
    
    render() {

        return (
            <table className="centered striped">
                <TableHead />
                <TableBody allCities = {  this.props.allCities } />
            </table>
        );
    }
}


export default DataCity