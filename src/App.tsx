import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
  Paper,
} from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';
import AppShellDemo from './components/AppShellDemo';

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
        <Paper>
          <AppShellDemo />
        </Paper>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;

