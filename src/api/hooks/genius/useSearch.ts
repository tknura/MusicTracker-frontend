import { useQuery } from 'react-query'

import { getSearch } from 'api/actions/genius/getSearch'
import { useGeniusApi } from 'components/providers/GeniusApiProvider'

export const useSearch = (name: string) => {
  const { fetch } = useGeniusApi()

  return useQuery(`geniusSearch${name}`, () => getSearch(fetch, name))
}
