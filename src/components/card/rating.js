import { HStack, Icon } from "@chakra-ui/react";
import { StarFill, StarStroke } from '../icons';

function Rating({ rate }) {
  const score = Math.round(rate / 2);
  const stars = Array.from({ length: 5 }, () => ({}))

  return (
    <HStack>
      {stars.map((_star, index) => <Icon key={index} as={index <= score ? StarFill : StarStroke} />)}
    </HStack>
  )
}

export default Rating