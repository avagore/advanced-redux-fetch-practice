function loadContactsWithFetch(dispatch) {
  // something is about to happen
  dispatch({
    type: "LOAD_CONTACTS"
  });
  
  // actual call to the API
  fetch("/contacts")
  .then( (response) => {
    return response.json();
  }).then((contacts) => {
    dispatch(contactsLoaded(contacts));
  });
};

// this is the action. It needs to be exported
export function loadContacts() {
  return loadContactsWithFetch;
}

// this is the action that gets called when the fetch call is done. 
export function contactsLoaded(contacts) {
 return {
   type: "CONTACTS_LOADED",
   value: contacts
 };
}

function loadVehiclesWithFetch(dispatch) {
  // something is about to happen
  dispatch({
    type: "LOAD_VEHICLES"
  });
  
  // actual call to the API
  fetch("/vehicles")
  .then( (response) => {
    return response.json();
  }).then((vehicles) => {
    dispatch(vehiclesLoaded(vehicles));
  });
};

// this is the action. It needs to be exported
export function loadVehicles() {
  return loadVehiclesWithFetch;
}

// this is the action that gets called when the fetch call is done. 
export function vehiclesLoaded(vehicles) {
 return {
   type: "VEHICLES_LOADED",
   value: vehicles
 };
}

function loadCommentsWithFetch(dispatch) {
  // something is about to happen
  dispatch({
    type: "LOAD_COMMENTS"
  });
  
  // actual call to the API
  fetch("/comments")
  .then( (response) => {
    return response.json();
  }).then((comments) => {
    dispatch(commentsLoaded(comments));
  });
};

// this is the action. It needs to be exported
export function loadComments() {
  return loadCommentsWithFetch;
}

// this is the action that gets called when the fetch call is done. 
export function commentsLoaded(comments) {
 return {
   type: "COMMENTS_LOADED",
   value: comments
 };
}

function loadProductsWithFetch(dispatch) {
  // something is about to happen
  dispatch({
    type: "LOAD_PRODUCTS"
  });
  
  // actual call to the API
  fetch("/products")
  .then( (response) => {
    return response.json();
  }).then((products) => {
    dispatch(productsLoaded(products));
  });
};

// this is the action. It needs to be exported
export function loadProducts() {
  return loadProductsWithFetch;
}

// this is the action that gets called when the fetch call is done. 
export function productsLoaded(products) {
 return {
   type: "PRODUCTS_LOADED",
   value: products
 };
}

export function createProduct(product) {
 return function (dispatch) {
   fetch("/products", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(product)
   }).then(() => dispatch(loadProducts()));
 };
}

export function createContact(contact) {
 return function (dispatch) {
   fetch("/contacts", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(contact)
   }).then(() => dispatch(loadContacts()));
 };
}

export function createComment(comment) {
 return function (dispatch) {
   fetch("/comments", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(comment)
   }).then(() => dispatch(loadComments()));
 };
}

export function createVehicle(vehicle) {
 return function (dispatch) {
   fetch("/vehicles", {
     method: "POST",
     headers: {"Content-Type": "application/json"},
     body: JSON.stringify(vehicle)
   }).then(() => dispatch(loadVehicles()));
 };
}