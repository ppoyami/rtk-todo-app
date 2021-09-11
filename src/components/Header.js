import { useLocation, useHistory } from 'react-router-dom';
import { ChevronLeftIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid';

export default function Header() {
  const { pathname } = useLocation();
  const history = useHistory();

  if (pathname === '/') return null;

  const goBack = () => history.goBack();

  return (
    <header className="w-full h-14 flex items-center justify-between">
      <div className="flex items-center">
        <ChevronLeftIcon onClick={goBack} className="h-5 mr-3" />
        <h1 className="text-lg font-bold">{pathname.split('/')[1]}</h1>
      </div>
      <div className="flex items-center text-gray-400">
        <SearchIcon className="h-5 mr-3" />
        <MenuIcon className="h-5" />
      </div>
    </header>
  );
}
