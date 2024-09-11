/**
 * @generated SignedSource<<94d4db086ef999690da710277a3c2ecb>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type RecipesQuery$variables = Record<PropertyKey, never>;
export type RecipesQuery$data = {
  readonly recipes: ReadonlyArray<{
    readonly id: string;
    readonly title: string;
  }>;
};
export type RecipesQuery = {
  response: RecipesQuery$data;
  variables: RecipesQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "concreteType": "Recipe",
    "kind": "LinkedField",
    "name": "recipes",
    "plural": true,
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
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "RecipesQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "RecipesQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "77b425ba4682162317e187b1d6931ddc",
    "id": null,
    "metadata": {},
    "name": "RecipesQuery",
    "operationKind": "query",
    "text": "query RecipesQuery {\n  recipes {\n    id\n    title\n  }\n}\n"
  }
};
})();

(node as any).hash = "505cd8a7dfee0457adf6eeb1fa269b77";

export default node;
