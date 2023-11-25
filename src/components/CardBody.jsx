import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function CardBody() {
  return (
  <div style={{width:'50%', margin:'10rem auto'}}>
         <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          Please, enter your email address or username.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Text className="text-muted">
          Please enter your password.
        </Form.Text>
        <div style={{marginTop:'1rem'}}>
              <Button variant="primary" type="submit">
                Log In
              </Button>
        </div>
     
    </Form>
  </div>
 
  );
}

export default CardBody;