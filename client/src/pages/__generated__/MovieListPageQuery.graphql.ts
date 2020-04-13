/* tslint:disable */
/* eslint-disable */
/* @relayHash 86d8a9df9323c1cd976210c80110ac1b */

import { ConcreteRequest } from "relay-runtime";
export type MovieListPageQueryVariables = {};
export type MovieListPageQueryResponse = {
    readonly movies: ReadonlyArray<{
        readonly id: string;
        readonly name: string;
        readonly tomatoMeter: number;
    }>;
};
export type MovieListPageQuery = {
    readonly response: MovieListPageQueryResponse;
    readonly variables: MovieListPageQueryVariables;
};



/*
query MovieListPageQuery {
  movies {
    id
    name
    tomatoMeter
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "movies",
    "storageKey": null,
    "args": null,
    "concreteType": "Movie",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "id",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "name",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "tomatoMeter",
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
    "name": "MovieListPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "MovieListPageQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "MovieListPageQuery",
    "id": null,
    "text": "query MovieListPageQuery {\n  movies {\n    id\n    name\n    tomatoMeter\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '84a8ce4aa633d79e4bae029e22bf0b73';
export default node;
