import { useParams } from "react-router-dom";

import useRepository from "../../hooks/useRepository";
import RepositoryItem from "../RepositoryList/RepositoryItem";

const Repository = () => {
  const id = useParams().id;
  const { repository, loading } = useRepository(id);

  if (!repository) {
    return;
  }

  return <RepositoryItem repository={repository} />;
};

export default Repository;
