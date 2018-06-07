import React, {Component} from 'react';
import axios from "axios/index";
import campers from '../SampleData/campers';

class Row extends Component {
    constructor(){
        super();
        this.state = {
            data: campers.campers
        };

        this.sampleURL = 'http://localhost:4000/campers';
    }

    /*componentDidMount(){
        let self = this;
        axios.get(this.sampleURL).then((response) => {
            console.log(response);
            self.setState((response.campers.map(person => {
                return(
                    <tr>
                        <td>{person.id}</td>
                        <td>{person.name}</td>
                        <td>{person.total_points}</td>
                        <td>{person.point_in_last_30_days}</td>
                    </tr>
                );
            })));
        });
    };*/

    render() {
        let rows = this.state.data.map(person => {
            return(
                <tr>
                    <td>{person.id}</td>
                    <td>{person.name}</td>
                    <td>{person.total_points}</td>
                    <td>{person.point_in_last_30_days}</td>
                </tr>
            );
        });
        return rows;
    };
}

export default Row;