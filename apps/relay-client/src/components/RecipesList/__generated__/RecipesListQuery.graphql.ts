/**
 * @generated SignedSource<<03856edc15bee7010ecd84b8fca3e65f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecipesListQuery$variables = Record<PropertyKey, never>;
export type RecipesListQuery$data = {
  readonly recipes: ReadonlyArray<{
    readonly id: string;
    readonly " $fragmentSpreads": FragmentRefs<"RecipeItemFragment">;
  }>;
};
export type RecipesListQuery = {
  response: RecipesListQuery$data;
  variables: RecipesListQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipesListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "RecipeItemFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecipesListQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Recipe",
        "kind": "LinkedField",
        "name": "recipes",
        "plural": true,
        "selections": [
          (v0/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "title",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "0e161e0b0ca2f19a1ee45af9e17fd2ca",
    "id": null,
    "metadata": {},
    "name": "RecipesListQuery",
    "operationKind": "query",
    "text": "query RecipesListQuery {\n  recipes {\n    id\n    ...RecipeItemFragment\n  }\n}\n\nfragment RecipeItemFragment on Recipe {\n  title\n  completed\n}\n"
  }
};
})();

(node as any).hash = "cc91d5a7a1917f79ba9ad99075f08853";

export default node;
