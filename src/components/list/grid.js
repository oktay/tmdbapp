import { Grid } from '@chakra-ui/react';
import GridSkeleton from './grid-skeleton';
import Card from '../card/card';

function ContentGrid({ loading, results, gap, templateColumns, bigCards }) {
  return (
    <Grid
      templateColumns={templateColumns || {
        base: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
        xl: 'repeat(5, 1fr)',
      }}
      gap={gap || "8"}
    >
      {loading && <GridSkeleton />}
      {!loading &&
        results.map((content, index) => (
          <Card key={content?.id ?? index} big={bigCards} {...content} />
        ))}
    </Grid>
  );
}

export default ContentGrid;
