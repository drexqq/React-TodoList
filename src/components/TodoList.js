import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';

const TodoListBlock = styled.div`
    flex: 1;
    padding: 20px 32px 48px 32px;
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="Project Create" done={true} />
            <TodoItem text="Component Create" done={false} />
            <TodoItem text="Context Create" done={true} />
            <TodoItem text="Function Create" done={false} />
        </TodoListBlock>
    );
}

export default TodoList;
