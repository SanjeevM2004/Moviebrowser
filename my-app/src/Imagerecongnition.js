import React from 'react';

class ImageRow extends React.Component{
    render(){
        return(
            <img src= {this.props.image} alt = {this.props.name} width = "300" height = "300"/>
        )
    }
}
export default ImageRow;
