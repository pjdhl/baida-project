
import React, { Component } from 'react';
import uuid from "uuid"
import {
    Grid,
    ListGroup,
    ListGroupItem,
    Button,
  } from 'react-bootstrap';
  import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';
  import "./index"
class TodoList extends Component {
    state = {
      items: [
        { id: uuid(), text: 'Buy eggs' },
        { id: uuid(), text: 'Pay bills' },
        { id: uuid(), text: 'Invite friends over' },
        { id: uuid(), text: 'Fix the TV' },
      ],
    };
  
    render() {
      const { items } = this.state;
      return (
        <Grid>
          <ListGroup>
            <TransitionGroup className="todo-list">
              {items.map(({ id, text }) => (
                <CSSTransition
                  key={id}
                  timeout={500}
                  classNames="fade"
                >
                  <ListGroupItem>
                    <Button
                      className="remove-btn"
                      type="button"
                      bsStyle="danger"
                      bsSize="xs"
                      onClick={() => {
                        this.setState(state => ({
                          items: state.items.filter(
                            item => item.id !== id
                          ),
                        }));
                      }}
                    >
                      &times;
                    </Button>
                    {text}
                  </ListGroupItem>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </ListGroup>
          <Button
            type="button"
            onClick={() => {
              const text = prompt('Enter some text');
              if (text) {
                this.setState(state => ({
                  items: [
                    ...state.items,
                    { id: uuid(), text },
                  ],
                }));
              }
            }}
          >
            Add Item
          </Button>
        </Grid>
      );
    }
  }
  

  export default TodoList