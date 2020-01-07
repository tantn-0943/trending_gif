import React, { Component } from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class itemTrending extends Component {
    render() {
        let {item:trending} = this.props
        debugger
        console.log(trending.images.downsized_medium.url);
        return (
            <div className="col-md-3">
                <Card>
                    <img width="100%" src={trending.images.downsized_medium.url} alt="Card image cap" />
                    <CardBody>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default itemTrending;