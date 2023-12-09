import RepositoryItem from "./repository-item/repository-item.tsx";
import {RepositoryListProps} from "./repository-list.props.ts";
import Div from "../../../../components/elements/div";

const RepositoryList = ({list}: RepositoryListProps) => {

  if (list) {
    return (
      <Div className={'flex-col py-4 gap-4'}>
        {list.map(item => (
          <RepositoryItem
            key={item.id}
            full_name={item.full_name}
            owner={item.owner.avatar_url}
            language={item.language}
            stargazers_count={item.stargazers_count}
            description={item.description}
            updated_at={item.updated_at}
          />)
        )}
      </Div>
    )
  }
  return null;
}

export default RepositoryList;