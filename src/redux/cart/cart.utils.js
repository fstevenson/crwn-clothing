export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === cartItemToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find((item) => {
    return item.id === cartItemToRemove.id;
  });

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
