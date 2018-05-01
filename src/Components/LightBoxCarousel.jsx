import React from 'react';

class LightBoxCarousel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        const lightBoxImage = {
            // margin: 'auto',
            display: 'block',
            float: 'left',
            marginTop: '2.5%',
            height: '95%',
            // width: 'auto',
            border: '1px solid $444455',
        }
        return( 
            <img style={lightBoxImage} src={this.props.url}></img>
        );

    }
}


export default LightBoxCarousel;