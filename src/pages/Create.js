import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import FormLayout from '@/components/layouts/FormLayout';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '@/reducers/todos';
import { useHistory } from 'react-router';

export default function Create() {
  const [value, setValue] = useState({ title: '', desc: '' });
  const history = useHistory();
  const dispatch = useDispatch();
  const onChange = e => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    dispatch(addTodo(value));
    history.push('/board');
  };

  return (
    <FormLayout {...{ onSubmit }} className="f-full">
      <Input {...{ onChange, value: value.title }} label="title" name="title" />
      <Input
        {...{ onChange, value: value.desc }}
        label="description"
        name="desc"
      />
      <Button className="w-full absolute bottom-0">Create a Task</Button>
    </FormLayout>
  );
}
