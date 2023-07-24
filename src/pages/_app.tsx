import type { AppProps } from 'next/app'
import Head from 'next/head';
import { Provider } from 'react-redux'
import { store } from '@/stores/store'
import { ThemeProvider } from '@mui/material/styles';
import { MuiTheme } from '@/components/MuiTheme';
import Box from '@mui/material/Box';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Smart Baby</title>
      </Head>

      <Provider store={store}>
        <ThemeProvider theme={MuiTheme}>
          <Box sx={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
            <Component {...pageProps} />
          </Box>
        </ThemeProvider>
      </Provider>
    </>
  )
}
