// filtersReducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date'
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
      case 'SORT_BY_CATEGORY':
        return {
          ...state,
          sortBy: 'category'
        };
    default:
      return state;
  }
};

export default filtersReducer;
