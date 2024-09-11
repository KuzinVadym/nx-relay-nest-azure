import { graphql } from 'relay-runtime';
import { useLazyLoadQuery } from "react-relay";

import type {RecipesQuery as RecipesQueryType} from './__generated__/RecipesQuery.graphql';

const RecipesQuery = graphql`
  query RecipesQuery {
    recipes {
      id,
		  title
    }
  }
`;

export default function Recipes() {
  const data = useLazyLoadQuery<RecipesQueryType>(
    RecipesQuery,
    {},
  );

  console.log(data)

  return (
    <div className="newsfeed">
      Recipes
    </div>
  );
}
