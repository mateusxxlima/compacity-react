import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAllCity } from '../../store/actions/city.action'

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
    
    componentDidMount() {

        this.props.getAllCity()

    }

    render() {

        return (
            <table className="dataTable striped">
                <TableHead />
                <TableBody allCities = {  this.props.city } />
            </table>
        );
    }
}

const mapStateToProps = state => ({
    city : state.arrayCityReducer
})

const mapDispatchToProps = dispatch => ({
    getAllCity: () => dispatch(getAllCity())
})

export default connect(mapStateToProps, mapDispatchToProps)(DataCity)