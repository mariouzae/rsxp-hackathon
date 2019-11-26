import React from 'react';
import { 
  Button,
  Form,
  Container,
  Row,
  Col,
  Image
} from 'react-bootstrap';

function Login(){
    return (
        <div className="login">
         <Form className="formLogin">
                <Container>
                
                    <Row className="justify-content-md-center">
                        <Col lg={6}  sm={12}>
                          <Image className="logo" src="logo.png" roundedCircle />
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col lg={6}  sm={12}>
                          <Form.Group>
                            <Form.Label  className="loginLabel">Instituição</Form.Label>
                            <Form.Control type="text" placeholder="Digite o nome da instituição" />
                          </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col  lg={6}  sm={12}>
                          <Form.Group>
                            <Form.Label  className="loginLabel">Email</Form.Label>
                            <Form.Control type="email" placeholder="Digite seu e-mail" />
                          </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col  lg={6}  sm={12}>
                          <Form.Group>
                            <Form.Label  className="loginLabel">Senha</Form.Label>
                            <Form.Control type="password" placeholder="Digite sua senha" />
                          </Form.Group>
                        </Col>
                    </Row>

                    <Row className="justify-content-md-center">
                        <Col  lg={6}  sm={12}>
                              <Button className="buttonProject" variant="primary" type="submit">
                                Cadastrar
                              </Button>
                        </Col>
                    </Row>

                </Container>
          </Form>
        </div>
      );
}

export default Login;