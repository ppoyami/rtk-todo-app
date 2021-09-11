import Button from '@/components/elements/Button';
import Input from '@/components/elements/Input';
import FormLayout from '@/components/layouts/FormLayout';

export default function Create() {
  return (
    <FormLayout className="f-full">
      <Input label="title" />
      <Input label="description" />
      <Button className="w-full absolute bottom-0">Create a Task</Button>
    </FormLayout>
  );
}
