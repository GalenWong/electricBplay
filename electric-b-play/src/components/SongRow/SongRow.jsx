import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import { PropTypes } from 'prop-types';

const descriptionStyle = {
    textAlign: "left",
};

const titleStyle={
    fontSize:'1.3em',
};

const artistStyle={

};

class SongRow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected:false,
        };
    }

    static get PropTypes() {
        return {
            songName: PropTypes.string.isRequired,
            artistName: PropTypes.string.isRequired,
            duration: PropTypes.string.isRequired
        }
    }

    render(){
        return(
            <div>
                <Col md={1}>

                </Col>
                <Col md={9} style={descriptionStyle}>
                    <Row style = {titleStyle}>
                        <p>All Falls Down</p>
                    </Row>
                    <Row>
                        <p>J.Fla</p>
                    </Row>
                </Col>
                <Col md={1}>
                </Col>
                <Col md={1}>
                    3:00
                </Col>
            </div>
        );
    }

}

export default SongRow;