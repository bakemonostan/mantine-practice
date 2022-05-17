import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Sun, MoonStars } from 'tabler-icons-react';

const LightDarkButton = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';
  return (
    <div>
      <ActionIcon
        variant='outline'
        color={dark ? 'yellow' : 'blue'}
        onClick={() => toggleColorScheme()}
        title='Toggle color scheme'
        m='md'
      >
        {dark ? <Sun size={20} /> : <MoonStars size={20} />}
      </ActionIcon>
    </div>
  );
};
export default LightDarkButton;
