export default function reducer(state = {
  html: '',
}, action) {
  switch (action.type) {
  case 'IDE_PROBLEM_SET_HTML': {
    return {
      ...state,
      html: action.payload,
    };
  }
  default:
    return state;
  }
}
