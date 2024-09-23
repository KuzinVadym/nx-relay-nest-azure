import { graphql, useLazyLoadQuery } from 'react-relay';

import styles from './RecipesList.module.css';
import { RecipeItem } from '../RecipeItem/RecipeItem';
import { RecipesListQuery as RecipesListQueryType } from './__generated__/RecipesListQuery.graphql';

type Props = {
  recipes: any[];
  toggleRecipy: Function;
  deleteRecipy: Function;
};

const RecipesListQuery = graphql`
  query RecipesListQuery {
    recipes {
      id
      ...RecipeItemFragment
    }
  }
`;

export function RecipesList({ toggleRecipy, deleteRecipy }: Props) {

const data = useLazyLoadQuery<RecipesListQueryType>(
  RecipesListQuery,
  {},
);
const recipes = data.recipes
console.log('data');
console.log(data);

  return (
    <ul className={styles['recipes-list']}>
      {recipes.length === 0 && "No Recipes"}
      {data.recipes.map(recipe => {
        return (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            toggleRecipy={toggleRecipy}
            deleteRecipy={deleteRecipy}
          />
        )
      })}
    </ul>
  )
}
