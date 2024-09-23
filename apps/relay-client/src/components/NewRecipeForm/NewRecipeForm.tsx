import { SyntheticEvent, useState } from "react"
import { useMutation, useFragment, graphql} from 'react-relay';
import styles from './NewRecipeForm.module.css';
import { title } from 'process';

type Props = {
  onSubmit: Function;
};

const NewRecipeFormAddMutation = graphql`
  mutation NewRecipeFormAddMutation(
    $title: String!,
  ) {
    addRecipe(
      newRecipeData: {
        title: $title
      }
    ) {
      id,
      title
    }
  }
`;

export default function NewRecipeForm({ onSubmit }: Props) {
  const [addRecipe, isMutationInFlight] = useMutation(NewRecipeFormAddMutation);
  const [newItem, setNewItem] = useState("")

  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault()
    if (newItem === "") return
    onSubmit(newItem)

    addRecipe({
      variables: {
        title: newItem,
      },
      updater: (store, mutationResult) => {
        console.log('mutationResult');
        console.log(mutationResult);
        console.log('store');
        console.log(store.get('recipes'));
      },
      onCompleted: () => {
        // Handle success or failure here, if needed
      },
    })

    setNewItem("")
  }

    return (
      <form onSubmit={handleSubmit} className={styles['recipes-form']}>
      <div className={styles['recipes-form-row']}>
        <label htmlFor="item">New Recipe</label>
        <input
          className={styles['recipe-input']}
          value={newItem}
          onChange={e => setNewItem(e.target.value)}
          type="text"
          id="item"
        />
      </div>
      <button className={styles['recipes-add-button']}>Add</button>
    </form>
    );
  }
