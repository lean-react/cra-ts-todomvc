import React from 'react'
import TodoInput from './TodoInput';
import TodoMain from './TodoMain';
import TodoToolbar from './TodoToolbar';
import { AppState, Visibility } from './model';
import { Store, reducer } from './store';

const TodoShell = () => {

  const initialState: AppState = {
    todos: [
      { id: -3, title: 'Implement TodoItem logic', completed: true },
      { id: -2, title: 'Unit Testing code', completed: false },
      { id: -1, title: 'Backend Persistence', completed: false },
    ],
    filter: Visibility.All
  };

  return (
    <Store reducer={reducer} initialState={initialState}>
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <TodoInput></TodoInput>
        </header>
        <TodoMain></TodoMain>
        <TodoToolbar></TodoToolbar>
      </section>
    </Store>
  )
}

export default TodoShell;
