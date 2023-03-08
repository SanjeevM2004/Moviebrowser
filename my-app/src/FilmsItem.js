import React from 'react';

class FilmItemRow extends React.Component {
    render(){
        return(
            <li>
                <a href = {this.props.film}>{this.props.film}</a>
            </li>
        )
    }
}
export default FilmItemRow;