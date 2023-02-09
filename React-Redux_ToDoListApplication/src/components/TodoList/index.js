import { Col, Row, Input, Button } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { todosRemainingSelector } from '../../redux/selectors';
import todoListSlice from './todosSlice';


export default function TodoList() {
  const [todoName, setTodoName] = useState('');
  const [priority, setPriority] = useState('');

  const todoList = useSelector(todosRemainingSelector);

  const dispatch = useDispatch();

  const handleAddButtonClick = () => {
    dispatch(
      todoListSlice.actions.addTodo({
        id: uuidv4(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );

    setTodoName('');
    setPriority('');
  };

  const handleDeleteButton = (id) => {
    dispatch(
      todoListSlice.actions.deleteTodo({
        id: id
      })
    )
  }

  const handleInputChange = (e) => {
    console.log('handleInputChange', e.target.value);
    setTodoName(e.target.value);
  };



  return (
    <Row style={{ height: ''}}>
      
      <Col span={24}>
        <Input.Group style={{ display: 'flex'  }} compact>
          <Input value={todoName} onChange={handleInputChange} placeholder="Add new task in here" />
          <Button type='primary'  onClick={handleAddButtonClick}>
            +
          </Button>
        </Input.Group>
      </Col>
      <Col span={24} style={{ height: '', marginTop: '20px', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <div
            key={todo.id}
            id={todo.id}
          >
            <Todo
              key={todo.id}
              id={todo.id}
              name={todo.name}
              prioriry={todo.priority}
              completed={todo.completed}
            />
            <button
              className='todolist-delete-task-button'> Del </button>
          </div>
        ))}
      </Col>
    </Row>
  );
}
