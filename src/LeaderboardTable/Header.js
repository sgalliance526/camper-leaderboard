import React, {Component} from 'react';

class Header extends Component {
    render(){
        return(
            <thead className="thead-default">
                <tr>
                    <th>#</th>
                    <th>Camper Name</th>
                    <th>Points in past 30 days</th>
                    <th>All time points</th>
                </tr>
            </thead>
        );
    }
}

export default Header;