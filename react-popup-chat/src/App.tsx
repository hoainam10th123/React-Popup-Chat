import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import './App.css';
import FriendList from './components/FriendList';
import { useStore } from './store/store';

function App() {
  const {darkThemeStore: {theme, toogleDark}} = useStore();

  useEffect(() => {

    switch (theme) {
      case 'dark':
        document.body.classList.add('bg-dark');
        break;
    
      default:
        document.body.classList.remove('bg-dark');
        break;
    }

  }, [theme])

  return (
    <Container>
      <Row xs={6}>
      <FriendList />
      </Row>
      <Row xs={6}>
      <Button variant='primary'>button 1</Button>
      <Button variant='secondary'>button 2</Button>
      </Row>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="toogle" onChange={toogleDark} />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default observer(App);
