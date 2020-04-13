async function fetchGraphQL(
  text: string | null | undefined,
  variables: any
): Promise<any> {
  // Fetch data from our "server":
  const response = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export { fetchGraphQL };
