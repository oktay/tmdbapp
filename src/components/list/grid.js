import { Grid } from '@chakra-ui/react';
import GridSkeleton from './grid-skeleton';
import Card from '../card/card';

function ContentGrid({ loading, results }) {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
        xl: 'repeat(5, 1fr)',
      }}
      gap="8"
    >
      {loading && <GridSkeleton />}
      {!loading && results.map((content, index) => <Card key={content?.id ?? index} {...content} />)}
    </Grid>
  );
}

export default ContentGrid;
