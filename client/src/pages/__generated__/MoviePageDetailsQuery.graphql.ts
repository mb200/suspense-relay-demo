/* tslint:disable */
/* eslint-disable */
/* @relayHash 2cbbbdd67d6a2341476a539c498c7749 */

import { ConcreteRequest } from "relay-runtime";
export type MoviePageDetailsQueryVariables = {
    id: string;
};
export type MoviePageDetailsQueryResponse = {
    readonly movie: {
        readonly name: string;
        readonly posterSrc: string;
        readonly tomatoMeter: number;
        readonly audienceScore: number;
        readonly criticsConsensus: string;
    };
};
export type MoviePageDetailsQuery = {
    readonly response: MoviePageDetailsQueryResponse;
    readonly variables: MoviePageDetailsQueryVariables;
};



/*
query MoviePageDetailsQuery(
  $id: ID!
) {
  movie(input: {id: $id}) {
    name
    posterSrc
    tomatoMeter
    audienceScore
    criticsConsensus
    id
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
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "posterSrc",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "tomatoMeter",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "audienceScore",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "criticsConsensus",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "MoviePageDetailsQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "movie",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/)
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "MoviePageDetailsQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "movie",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "Movie",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          (v5/*: any*/),
          (v6/*: any*/),
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "MoviePageDetailsQuery",
    "id": null,
    "text": "query MoviePageDetailsQuery(\n  $id: ID!\n) {\n  movie(input: {id: $id}) {\n    name\n    posterSrc\n    tomatoMeter\n    audienceScore\n    criticsConsensus\n    id\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'c356dcae57bffe3dd7a8781aba755e5b';
export default node;
