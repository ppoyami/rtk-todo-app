import { useHistory } from 'react-router-dom';
import Button from '@/components/elements/Button';

export default function Landing() {
  const history = useHistory();
  const goBoard = () => history.push('/board');
  return (
    <div>
      <h1>hello, Tailwind ToDo app</h1>
      <Button onClick={goBoard}>start</Button>
    </div>
  );
}
