import React, {Component} from 'react';
import {Table} from 'react-bootstrap';
import Row from "./Row";
import Header from "./Header";

class LeaderboardTable extends Component {
    render() {
        return (
            <Table className="table table-striped">
                <Header/>
                <tbody>
                    <Row/>
                </tbody>
            </Table>
        );
    };
}

export default LeaderboardTable;