import { Button } from '@mantine/core';
import { useState } from 'react';
import { BrandTwitter, Sunset } from 'tabler-icons-react';

const Buttons = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
  };

  return (
    <>
      <Button
        leftIcon={<Sunset />}
        variant='gradient'
        gradient={{ from: 'indigo', to: 'cyan' }}
      >
        Indigo cyan
      </Button>
      <Button
        variant='gradient'
        gradient={{ from: 'teal', to: 'lime', deg: 105 }}
        loading={loading}
        onClick={handleClick}
      >
        Lime green
      </Button>
      <Button
        variant='gradient'
        gradient={{ from: 'teal', to: 'blue', deg: 60 }}
      >
        Teal blue
      </Button>
      <Button variant='gradient' gradient={{ from: 'orange', to: 'blue' }}>
        Orange red
      </Button>
      <Button
        variant='gradient'
        gradient={{ from: '#ed6ea0', to: '#ec8c69', deg: 35 }}
      >
        Peach
      </Button>
      <Button
        component='a'
        target='_blank'
        rel='noopener noreferrer'
        href='https://twitter.com/mantinedev'
        leftIcon={<BrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: '#00acee',
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,
            margin: 20,

            '&:hover': {
              backgroundColor: theme.fn.darken('#00acbb', 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        Follow on Twitter
      </Button>
    </>
  );
};
export default Buttons;
