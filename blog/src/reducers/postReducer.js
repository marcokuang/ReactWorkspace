// maintains an array of all fetched posts

export default (state = [], action) => {

  // traditional if else statements
  // if (action.type === 'FETCH_POSTS') {
  //   return action.payload;
  // }
  //return state;

  switch (action.type) {
    case 'FETCH_POSTS':
      return action.payload;
  
    default:
      return state;
  }

};
