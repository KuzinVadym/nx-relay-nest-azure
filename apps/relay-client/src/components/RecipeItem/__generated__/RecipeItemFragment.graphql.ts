/**
 * @generated SignedSource<<8d31aafe72a4f41ed521f43920989928>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type RecipeItemFragment$data = {
  readonly completed: boolean;
  readonly title: string;
  readonly " $fragmentType": "RecipeItemFragment";
};
export type RecipeItemFragment$key = {
  readonly " $data"?: RecipeItemFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"RecipeItemFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "RecipeItemFragment",
  "selections": [
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
  "type": "Recipe",
  "abstractKey": null
};

(node as any).hash = "1b4c71595ec57280cdd9354bfe0dc7ae";

export default node;
