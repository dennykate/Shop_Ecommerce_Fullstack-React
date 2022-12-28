const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const getProducts = async (page) => {
  const response = await fetch(BASE_URL + `products?page=${page}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getProduct = async (id) => {
  const response = await fetch(BASE_URL + `products/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  return data.data;
};

export const getCarts = async (id, page) => {
  console.log(id);
  const response = await fetch(BASE_URL + `cart/user/${id}?page=${page}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

export const getCartDetail = async (id) => {
  const response = await fetch(BASE_URL + `cart/detail/${id}`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await response.json();
  console.log(data);
  return data;
};
