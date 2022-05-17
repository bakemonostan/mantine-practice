import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import Cards from './components/Cards';
import LightDarkButton from './components/LightDarkButton';

function App() {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));

  useHotkeys([['mod+J', () => toggleColorScheme()]]);
  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider theme={{ colorScheme }}>
        <Paper p='md' radius={0} style={{ minHeight: '100vh' }}>
          <Cards />
          <LightDarkButton />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;

