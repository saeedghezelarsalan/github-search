import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";
import useQueryParam from "../../../hooks/use-query-param";
import axios from "axios";
import RepositoryList from "./repository-list";
import Skeleton from "./skeleton/skeleton.tsx";

const Repository = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false)
  // const [type, setType] = useState<string | null>('repositories');

  const location = useLocation(); // This will give you the current location object
  const {pathname, search} = location;
  let typeQuery = useQueryParam('type') || 'repositories';
  typeQuery = typeQuery.toLowerCase()

  const nameQuery = useQueryParam('q')
  const pageQuery = useQueryParam('page')
  const perPageQuery = useQueryParam('per-page')

  useEffect(() => {
    setLoading(true)
    async function fetchData() {
      const res = await axios.get(`https://api.github.com/search/${typeQuery}`, {
        params: {
          q: nameQuery,
          page: pageQuery || 1,
          per_page: perPageQuery || 10,
        }
      });
      setLoading(false)
      setList(res.data.items)
      console.log(res)
      console.log(list)
    }

    fetchData()
  }, [pathname, search]);

  if(loading){
    return(
      <Skeleton/>
    )
  }

  if (typeQuery === 'repositories') {
    return (
      <RepositoryList list={list}/>
    )
  }

  return (
    <Skeleton/>
  )
}

export default Repository;