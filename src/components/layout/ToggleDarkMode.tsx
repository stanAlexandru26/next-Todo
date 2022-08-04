import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';

import clsxm from '@/lib/clsxm';

export default function ToggleDarkMode() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const handleThemeChange = () => {
    setTheme(resolvedTheme === 'dark' || theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <button
      onClick={handleThemeChange}
      aria-label='Toggle Dark Mode'
      type='button'
      className={clsxm('flex h-8 w-8 items-center justify-center')}
    >
      <Icon
        icon={
          resolvedTheme === 'dark' || theme === 'dark'
            ? 'akar-icons:sun-fill'
            : 'bytesize:moon'
        }
        className='h-8 w-8'
        onClick={handleThemeChange}
      />
    </button>
  );
}
