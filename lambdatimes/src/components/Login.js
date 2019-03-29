import React from 'react';
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: "",
            password: "",
            terms: false
        };

    }

    toggleModalHandler = _ => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChangeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    loginHandler = event => {
        event.preventDefault();

        localStorage.setItem('username', this.state.email);
        window.location.reload();
    }

    render() {
        return (
            <div>
                <span onClick={this.toggleModalHandler}>LOG IN</span>
                <Modal isOpen={this.state.modal} toggle={this.toggleModalHandler}>
                    <Form onSubmit={this.loginHandler}>
                        <ModalHeader toggle={this.toggleModalHandler}>LOG IN</ModalHeader>
                        <ModalBody>
                            <FormGroup>
                                <Label for="email">Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="youremail@gmail.com"
                                    value={this.state.email}
                                    onChange={this.onChangeHandler}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="a secure password"
                                    value={this.state.password}
                                    onChange={this.onChangeHandler}/>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="terms" id="terms" value={this.state.terms}
                                    onChange={this.onChangeHandler}/>{' '}
                                    I accept the Terms of Service
                                </Label>
                            </FormGroup>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="primary" onClick={this.loginHandler}>Login</Button>{' '}
                            <Button color="secondary" onClick={this.toggleModalHandler}>Cancel</Button>
                        </ModalFooter>
                    </Form>
                </Modal>
            </div>
        );
    }
}

export default Login;