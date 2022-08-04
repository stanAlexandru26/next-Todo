import ToggleDarkMode from './ToggleDarkMode';

export default function Header() {
  return (
    <header className='flex justify-between'>
      <h1>TO DO</h1>
      <ToggleDarkMode />
    </header>
  );
}
