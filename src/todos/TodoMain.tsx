import React, { useMemo } from 'react'
import TodoList from './TodoList';
import { useAppState, useDispatch, setAllStates } from './store';

const TodoMain = () => {

  const todos = useAppState(state => state.todos);
  const dispatch = useDispatch();

  // No need to recalculate if visibilty filter changes
  const allCompleted = useMemo(() => {
    return todos.findIndex(t => !t.completed) === -1
  }, [todos]);

  const setAllCompletedStates = () => {
    dispatch(setAllStates(!allCompleted));
  };

  return (
    <section className="main">
      <input id="toggle-all" className="toggle-all" type="checkbox"
        checked={allCompleted} onChange={setAllCompletedStates} />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <TodoList todos={todos}></TodoList>
    </section>
  )
}

export default TodoMain;
