import { useHistory } from 'react-router-dom';

import TodoList from '@/components/layouts/TodoList';
import Todo from '@/components/Todo';
import Button from '@/components/elements/Button';

export default function Board() {
  const history = useHistory();
  const goCreate = () => history.push('/create');
  return (
    <>
      <TodoList>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
        <Todo>learn rtk</Todo>
      </TodoList>
      <Button onClick={goCreate} className="w-full absolute bottom-0">
        Add a task
      </Button>
    </>
  );
}
