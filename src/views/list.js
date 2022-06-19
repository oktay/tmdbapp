import { Heading, Stack } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";
import { useApi, useParams } from "../lib/tmdb";
import ContentGrid from "../components/list/grid";

function ListView({ title, bigCards }) {
  const { pathname, search } = useLocation();
  const page = new URLSearchParams(search).get('page') || 1;
  const [params] = useParams({ page });
  const { loading, response } = useApi({ path: [pathname.split('/')[1], 'popular'].join('/'), params });

  return (
    <Stack pl={{ md: '14' }}>
      <Heading>{title}</Heading>
      <ContentGrid results={response?.results ?? []} loading={loading} bigCards={bigCards} gap={bigCards && '0'} />
    </Stack>
  )
}

export default ListView;