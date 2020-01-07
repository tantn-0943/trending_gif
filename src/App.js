import React from 'react';
import Homepage from './components/homepage/index'
import './App.css';

import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Homepage/>
    </div>
  );
}

export default App;
