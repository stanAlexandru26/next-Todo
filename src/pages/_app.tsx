import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';

import clsxm from '@/lib/clsxm';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <main
        className={clsxm(
          'bg-contain bg-fixed bg-top bg-no-repeat',
          'bg-background_mobile_light dark:bg-background_mobile_dark sm:bg-background_desktop_light sm:dark:bg-background_desktop_dark',
          'transition-all ease-linear'
        )}
      >
        <Component {...pageProps} />
      </main>
    </ThemeProvider>
  );
}

export default MyApp;
