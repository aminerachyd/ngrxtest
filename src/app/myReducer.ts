// Le type action est intéressant
import { Action } from '@ngrx/store';

// Le type de ce bout de state géré par ce reducer
interface State {
  name: string;
  title: string;
  number: number;
}

// La state initiale
const initalState: State = {
  name: 'Name Test',
  title: 'Title Test',
  number: 10,
};

// Mon reducer
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
