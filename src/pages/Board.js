import { useHistory } from 'react-router-dom';

import TodoList from '@/components/layouts/TodoList';
import Todo from '@/components/Todo';
import Button from '@/components/elements/Button';
import { useSelector } from 'react-redux';

export default function Board() {
  const history = useHistory();
  const goCreate = () => history.push('/create');

  const todos = useSelector(state => state.todos);
  return (
    <>
      <TodoList>
        {todos.map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoList>
      <Button onClick={goCreate} className="w-full absolute bottom-0">
        Add a task
      </Button>
    </>
  );
}
