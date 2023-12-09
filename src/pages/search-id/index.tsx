import Div from "../../components/elements/div";
import Sidebar from "../../screens/search-id/sidebar";
import {useEffect} from "react";
import RepositoryFilter from "../../screens/search-id/repository/repository-filter";
import Repository from "../../screens/search-id/repository";
import Sponsor from "../../screens/search-id/sponsor";

const SearchId = () => {

  useEffect(() => {
    // async function fetch(){
    //   const res = await axios.get('https://github.com/search?q=digikala&type=repositories&p=8\n')
    //   console.log(res)
    // }
    // fetch()
  });
  return (
    <Div className={''}>
      <Sidebar/>
      <Div className={'flex-col md:grid grid-cols-12 flex-1 h-auto md:flex-row p-4 gap-x-3'}>
        <Div className={'flex-col w-full h-fit col-span-9'}>
          <RepositoryFilter/>
          {/*repo*/}
          <Div>
            <Repository/>
          </Div>
        </Div>
        <Div className={'w-full col-span-3'}>
          <Sponsor/>
        </Div>
      </Div>

    </Div>
  )
}

export default SearchId;