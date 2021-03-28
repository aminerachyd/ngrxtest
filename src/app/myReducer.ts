import { Action } from '@ngrx/store';

interface State {
  name: string;
  title: string;
  number: number;
}

const initalState: State = {
  name: 'Name Test',
  title: 'Title Test',
  number: 10,
};

export function myReducer(state: State = initalState, action: Action): State {
  console.log(action.type, state);

  switch (action.type) {
    case 'CHANGE_NAME':
      return { ...state, name: state.name + 'x' };
    case 'CHANGE_TITLE':
      return { ...state, title: state.title + 'y' };
    case 'CHANGE_NUMBER':
      return { ...state, number: state.number + 1 };
    default:
      return state;
  }
}
