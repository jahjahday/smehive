// API'S

// GET API

// VIEW PROFILE

export async function getProfile(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed");
  }
  return await res.json();
}

// INDUSTRY CATEGORY

// EDIT CATEGORY
export async function editCategory(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed");
  }
  return await res.json();
}

// ALL CATEGORIES

export async function allCategories(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Falied");
  }
  return await res.json();
}

// SUB CATEGORY FETCH

export async function categoryFetch(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  return res.json();
}

// SOCIAL MEDIA FETCH

export async function socialMediaFetch(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
}

// SOCIAL MEDIA EDIT

export async function socialMediaEdit(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed to edit");
  }

  return res.json();
}

// DOCUMENT SET UP

export async function fetchDocument(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Failed to get");
  }
  return res.json();
}

// DOCUMENT LIST

export async function fetchDocumentList(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("error");
  }

  return res.json();
}

export async function editDocumentList(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("error");
  }

  return res.json();
}

//  IMAGE DIMENSION

export async function imageDimensionFetch(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function imageDimensionEdit(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// BANNER TEXT POSITION
export async function bannerTextFetch(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// FAQ
export async function fethFaq(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function editFaq(endpoint: string) {
  const res = await fetch(endpoint);
  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// COMPONENTS

export async function fetchComponents(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function fetchSocialMediaHandles(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function fetchWebsiteProfile(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function fetchCountries(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("New");
  }

  return res.json();
}

export async function fetchStates(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function fetchIndustriesCategories(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function fetchSubCategories(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function fetchEmployeeRange(endpoint: string) {
  const res = await fetch(endpoint);

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// POST API'S

// ADMIN AUTH

export async function register(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }
}

export async function login(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return await res.json();
}

// AUTHENTICATED == SETUP == PROFILE

// PROFILE

export async function postProfileSetup(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// INDUSTRY CATEGORY

export async function postAddCategory(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function postUpdateCategory(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// SUBCATEGORY

export async function addSubUpdateCategory(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function updateSubCategory(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function deactivateSubCategory(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function reactivateSubCategory(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// SOCIAL MEDIA

export async function addSocialMedia(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("");
  }

  return res.json();
}

export async function updateSocialMedia(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// DOCUMENT SETUP

export async function addDocumentSetup(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function updateDocumentSetup(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// DOCUMENT LIST

export async function addDocumentList(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function updateDocumentList(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function deactivateDocumentList(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function reactivateDocumentList(
  data: Record<string, unknown>,
  endpoint: string,
  method: string
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// IMAGE DIMENSION

export async function addImageDimension(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function updateImageDimension(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// BANNER TEXT POSITION

export async function addBannerTextPosition(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function updateBannerTextPosition(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// FAQ

export async function addFaq(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

export async function updateFaq(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

//  GALLERY

// CATEGORY

export async function addGallery(
  data: Record<string, unknown>,
  endpoint: string,
  method: string = "POST"
) {
  const res = await fetch(endpoint, {
    method,
    body: JSON.stringify(data),
  });

  if (!res.ok) {
    throw new Error("Error");
  }

  return res.json();
}

// AUTHENTICATED

// DELETE API
