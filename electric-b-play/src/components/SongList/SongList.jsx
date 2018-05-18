import React, { Component } from 'react';
import { Grid, Col, Row } from 'react-bootstrap';
import SongRow from '../SongRow/SongRow';
class SongList extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <div>
            <Grid>
            <Row>
                <SongRow />
            </Row>
            <Row>
                <SongRow />
            </Row>
            <Row>
                <SongRow />
            </Row>
            </Grid>
            </div>
        );
    }
}

export default SongList;