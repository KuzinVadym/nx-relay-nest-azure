import { graphql, useFragment } from 'react-relay';
import styles from './RecipeItem.module.css';

import type {RecipeItemFragment$key} from './__generated__/RecipeItemFragment.graphql';

type Props = {
  recipe: RecipeItemFragment$key;
  toggleRecipy: Function;
  deleteRecipy: Function;
};

export const RecipeItemFragment = graphql`
  fragment RecipeItemFragment on Recipe {
		title,
    completed
  }
`;

export function RecipeItem({ recipe, toggleRecipy, deleteRecipy }: Props) {

  const data = useFragment(
    RecipeItemFragment,
    recipe,
  );

  const { completed, title } = data;
  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleRecipy('3213', e.target.checked)}
        />
        {title}
      </label>
      
      <button onClick={() => deleteRecipy('3213')} className={styles['recepy-delete-button']}>
        Delete
      </button>
    </li>
  )
}