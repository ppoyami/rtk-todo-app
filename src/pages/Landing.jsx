import { useHistory } from 'react-router-dom';
import Button from '@/components/elements/Button';

import main from '@/img/main.png';

export default function Landing() {
  const history = useHistory();
  const goBoard = () => history.push('/board');
  return (
    <div className="flex flex-col justify-center h-full">
      <img className="w-full h-1/2 object-contain" src={main} alt="main logo" />
      <h1 className="text-center text-lg mb-5">hello, Tailwind ToDo app</h1>
      <Button onClick={goBoard} className="w-full">
        start
      </Button>
    </div>
  );
}
