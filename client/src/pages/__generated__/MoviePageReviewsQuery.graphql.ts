/* tslint:disable */
/* eslint-disable */
/* @relayHash f559c2131ca1a1a06391b22e76d18dd6 */

import { ConcreteRequest } from "relay-runtime";
export type MoviePageReviewsQueryVariables = {
    id: string;
};
export type MoviePageReviewsQueryResponse = {
    readonly movieReviews: ReadonlyArray<{
        readonly author: string;
        readonly source: string;
        readonly blurb: string;
        readonly fresh: boolean;
    }>;
};
export type MoviePageReviewsQuery = {
    readonly response: MoviePageReviewsQueryResponse;
    readonly variables: MoviePageReviewsQueryVariables;
};



/*
query MoviePageReviewsQuery(
  $id: ID!
) {
  movieReviews(input: {id: $id}) {
    author
    source
    blurb
    fresh
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "id",
    "type": "ID!",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "movieReviews",
    "storageKey": null,
    "args": [
      {
        "kind": "ObjectValue",
        "name": "input",
        "fields": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "id"
          }
        ]
      }
    ],
    "concreteType": "Review",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "author",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "source",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "blurb",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "fresh",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MoviePageReviewsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MoviePageReviewsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MoviePageReviewsQuery",
    "id": null,
    "text": "query MoviePageReviewsQuery(\n  $id: ID!\n) {\n  movieReviews(input: {id: $id}) {\n    author\n    source\n    blurb\n    fresh\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'ba1814874593846754436259a0f09a1e';
export default node;
