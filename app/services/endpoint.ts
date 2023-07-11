export const BASE_URL = process.env.BASE_URL;

function createEndpointUrl(endpoint: string) {
  return `${BASE_URL}/${endpoint}`;
}

export const endpoints = {
  auth: {
    register: createEndpointUrl("register"),
    login: createEndpointUrl("login"),
  },

  authenticated: {
    getProfile: createEndpointUrl("setup/profile"),
    allCategory: createEndpointUrl("setup/industry-category"),
    editCategory: createEndpointUrl("setup/industry-category/edit/1"),
  },
};
