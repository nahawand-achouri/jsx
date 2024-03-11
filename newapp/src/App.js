import './App.css';
import Description from './compnt/descrption';
import Picture from './compnt/image';
import Name from './compnt/name';
import Price from './compnt/price';
import Card from 'react-bootstrap/Card';

function App() {
    let firstName ="naha";

  return (
    <div> 
      <Card style={{ width: '18rem' }}>
      <Picture/>
      <Card.Body>
        <Card.Title>
          <Name/>
       </Card.Title>
        <Card.Text>
        <Description/>
        </Card.Text>
        <Price/>
      </Card.Body>
    </Card>
     
     
     {firstName ? `Hello ${firstName} `: "Hello there !"}

     {firstName && <Picture/>}
    </div>
  );
}

export default App;
