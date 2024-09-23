/**
 * @generated SignedSource<<d333962b83cd189fca56dbc26b56c511>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type NewRecipeFormAddMutation$variables = {
  title: string;
};
export type NewRecipeFormAddMutation$data = {
  readonly addRecipe: {
    readonly id: string;
    readonly title: string;
  };
};
export type NewRecipeFormAddMutation = {
  response: NewRecipeFormAddMutation$data;
  variables: NewRecipeFormAddMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "title"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "title",
            "variableName": "title"
          }
        ],
        "kind": "ObjectValue",
        "name": "newRecipeData"
      }
    ],
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "addRecipe",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "title",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewRecipeFormAddMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewRecipeFormAddMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "5064316a49fb5be71dbbb1a10c78fee5",
    "id": null,
    "metadata": {},
    "name": "NewRecipeFormAddMutation",
    "operationKind": "mutation",
    "text": "mutation NewRecipeFormAddMutation(\n  $title: String!\n) {\n  addRecipe(newRecipeData: {title: $title}) {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "214af21d3e5783a87ab5a16e3d8976a9";

export default node;
