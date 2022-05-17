import {
  Badge,
  Button,
  Card,
  Grid,
  Group,
  Image,
  Text,
  useMantineTheme,
} from '@mantine/core';

const Cards = () => {
  const theme = useMantineTheme();
  return (
    <div>
      <Grid justify={'space-around'}>
        <Grid.Col md={6} lg={3} style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image
                src='https://images.unsplash.com/photo-1541481809883-e5e40fbf964a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                height={180}
                alt='Norway'
              />
            </Card.Section>

            <Group
              position='apart'
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color='pink' variant='light'>
                On Sale
              </Badge>
            </Group>

            <Text size='sm' style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant='light'
              color='blue'
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col md={6} lg={3} style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image
                src='https://images.unsplash.com/photo-1541481809883-e5e40fbf964a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                height={180}
                alt='Norway'
              />
            </Card.Section>

            <Group
              position='apart'
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color='pink' variant='light'>
                On Sale
              </Badge>
            </Group>

            <Text size='sm' style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant='light'
              color='blue'
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
        <Grid.Col md={6} lg={3} style={{ maxWidth: 350 }} sm={4} xs={4}>
          <Card shadow='sm' p='lg'>
            <Card.Section>
              <Image
                src='https://images.unsplash.com/photo-1541481809883-e5e40fbf964a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80'
                height={180}
                alt='Norway'
              />
            </Card.Section>

            <Group
              position='apart'
              style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
            >
              <Text weight={500}>Norway Fjord Adventures</Text>
              <Badge color='pink' variant='light'>
                On Sale
              </Badge>
            </Group>

            <Text size='sm' style={{ lineHeight: 1.5 }}>
              With Fjord Tours you can explore more of the magical fjord
              landscapes with tours and activities on and around the fjords of
              Norway
            </Text>

            <Button
              variant='light'
              color='blue'
              fullWidth
              style={{ marginTop: 14 }}
            >
              Book classic tour now
            </Button>
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default Cards;
