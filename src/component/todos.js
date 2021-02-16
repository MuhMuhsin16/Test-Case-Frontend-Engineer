import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getTodos, deleteTodo, updateTodo } from '../store/actions'
import { Table, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import addTodo from './addTodo';

class todos extends Component {
    componentDidMount() {
        this.props.getTodos()

    }

    editDetails = (data) => {
        var title = prompt("Please enter your new title", data.title);
        if (title != null) {
            data.title = title
            this.props.updateTodo(data)
            
        }
    }
    render() {
        const { todos } = this.props.todos
        const { dataTitle } = this.props;
        console.log(todos)



        return (
            <Container >
                <Row>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos.filter(data => data.status === 0).sort(function(a,b){ return b.createdAt - a.createdAt }).map(u =>
                                    <tr>
                                        <React.Fragment key={u.id}>
                                            <td>{u.title} </td>
                                            <td>
                                                <button onClick={() => this.editDetails(u)}>Update</button>
                                                <button onClick={() => this.props.deleteTodo(u.id)}>Delete</button>
                                            </td>

                                        </React.Fragment>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                    <Col>
                        <Table striped bordered hover size="sm">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {(todos.filter(data => data.status === 1)).sort(function(a,b){ return b.createdAt - a.createdAt }).map(u =>
                                    <tr>
                                        <React.Fragment key={u.id}>
                                            <td>{u.title} </td>
                                            <td>
                                            <button onClick={() => this.editDetails(u)}>Update</button>
                                                <button onClick={() => this.props.deleteTodo(u.id)}>Delete</button>
                                            </td>

                                        </React.Fragment>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>

        )
    }
}

const mapStateToProps = (state) => ({ todos: state.todos })

export default connect(mapStateToProps, { getTodos, deleteTodo, updateTodo })(todos)