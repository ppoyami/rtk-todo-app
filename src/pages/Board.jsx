import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import TodoList from '@/components/layouts/TodoList';
import Todo from '@/components/Todo';
import Button from '@/components/elements/Button';
import { filterTypes, filterChange } from '@/features/filtersSlice';

export default function Board() {
  const history = useHistory();
  const goCreate = () => history.push('/create');
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);
  const filters = useSelector(state => state.filters);
  const currentFilter = Object.keys(filters).find(key => filters[key]);

  const filterTodos = () => {
    switch (currentFilter) {
      case filterTypes.ALL:
        return todos;
      case filterTypes.ACTIVE:
        return todos.filter(todo => !todo.done);
      case filterTypes.COMPLATE:
        return todos.filter(todo => todo.done);
      default:
        return todos;
    }
  };

  const handleKeyup = e => {
    console.log(e);
  };

  return (
    <>
      <ul className="flex space-x-2 mb-1">
        {Object.keys(filterTypes).map(key => (
          <li
            role="menuitem"
            onClick={() => dispatch(filterChange({ key: filterTypes[key] }))}
            onKeyUp={handleKeyup}
            key={key}
            className={`text-sm  ${
              currentFilter === filterTypes[key]
                ? 'text-black font-bold'
                : 'text-gray-400'
            }`}>
            {key}
          </li>
        ))}
      </ul>
      <TodoList>
        {filterTodos(todos).map(todo => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </TodoList>
      <Button onClick={goCreate} className="w-full absolute bottom-0">
        Add a task
      </Button>
    </>
  );
}
