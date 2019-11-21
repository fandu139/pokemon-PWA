import React from "react";
import { ButtonToolbar, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function ProductList(props) {
  return (
    <div className="App">
      <header className="App-button">
        <ButtonToolbar>
          <Button variant="success" onClick={props.addItem}>Add Item</Button>
        </ButtonToolbar>
      </header>
    </div>
  );
}

export default ProductList;
