import {useLocation} from 'react-router-dom';

function useQueryParam(query: string) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  return queryParams.get(query);
}

export default useQueryParam;