const BASE_URL = 'https://fakestoreapi.com'

/* ===================== PRODUCTS ===================== */

// GET /products
export const getAllProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`)
  if (!res.ok) throw new Error('Failed to fetch products')
  return res.json()
}

// GET /products/{id}
export const getProductById = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`)
  if (!res.ok) throw new Error('Failed to fetch product')
  return res.json()
}

// POST /products
export const addProduct = async (product) => {
  const res = await fetch(`${BASE_URL}/products`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  return res.json()
}

// PUT /products/{id}
export const updateProduct = async ({ id, ...product }) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
  })
  return res.json()
}

// DELETE /products/{id}
export const deleteProduct = async (id) => {
  const res = await fetch(`${BASE_URL}/products/${id}`, {
    method: 'DELETE',
  })
  return res.json()
}

/* ===================== CARTS ===================== */

// GET /carts
export const getAllCarts = async () => {
  const res = await fetch(`${BASE_URL}/carts`)
  return res.json()
}

// GET /carts/{id}
export const getCartById = async (id) => {
  const res = await fetch(`${BASE_URL}/carts/${id}`)
  return res.json()
}

// POST /carts
export const addCart = async (cart) => {
  const res = await fetch(`${BASE_URL}/carts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  })
  return res.json()
}

// PUT /carts/{id}
export const updateCart = async ({ id, ...cart }) => {
  const res = await fetch(`${BASE_URL}/carts/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
  })
  return res.json()
}

// DELETE /carts/{id}
export const deleteCart = async (id) => {
  const res = await fetch(`${BASE_URL}/carts/${id}`, {
    method: 'DELETE',
  })
  return res.json()
}
