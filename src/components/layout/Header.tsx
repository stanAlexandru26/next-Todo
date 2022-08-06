import clsxm from '@/lib/clsxm';

import ToggleDarkMode from './ToggleDarkMode';

export default function Header() {
  return (
    <header
      className={clsxm(
        'flex flex-row justify-between',
        'pt-10 pb-6 sm:pt-16 lg:pt-24 lg:pb-10',
        'tracking-widest'
      )}
    >
      <h1 className='text-white'>TO DO</h1>
      <ToggleDarkMode />
    </header>
  );
}
