import { AspectRatio, Skeleton, useBreakpointValue } from '@chakra-ui/react';

function GridSkeleton() {
  const itemCount = useBreakpointValue({ base: 4, md: 6, lg: 8, xl: 10 });

  return Array(itemCount)
    .fill({})
    .map((_, index) => (
      <AspectRatio ratio={2 / 3} key={index}>
        <Skeleton width="full" height="full" startColor="#2D2D2D" endColor="#1D1D1D" />
      </AspectRatio>
    ));
}

export default GridSkeleton;
