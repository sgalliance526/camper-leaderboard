import React, {Component} from 'react';
import axios from "axios/index";

class Row extends Component {
    constructor(){
        super();
        this.state = {
            tableData: []
        };

        this.sampleURL = 'http://localhost:4000/campers';
    }

    componentDidMount(){
        let self = this;
        axios.get(this.sampleURL, { responseType: 'json'}).then((response) => {
            //console.log(response.data);
            self.setState({tableData: response.data});
        });
    };

    render() {
        let rows = this.state.tableData.map(person => {
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