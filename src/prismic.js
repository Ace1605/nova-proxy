import * as prismic from "@prismicio/client";

// Fill in your repository name
export const repositoryName = "nova-test-bank";

export const client = prismic.createClient(repositoryName, {
  // If your repository is private, add an access token
  accessToken:
    "MC5aWUk2Z1JJQUFDSUE3cUVj.77-977-9Le-_vWjvv73vv71777-9WGDvv71dLO-_vRDvv71Ne--_vT9H77-977-9OO-_ve-_ve-_ve-_vXYJZw",

  // This defines how you will structure URL paths in your project.
  // Update the types to match the custom types in your project, and edit
  // the paths to match the routing in your project.
  //
  // If you are not using a router in your project, you can change this
  // to an empty array or remove the option entirely.
  routes: [
    {
      type: "courses",
      path: "/",
    },
  ],
});
