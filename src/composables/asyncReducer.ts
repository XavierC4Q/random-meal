import { readonly, ref } from "vue";
import { Reducer, IAsyncState, Action, Dispatch } from '../types/index';

function asyncReducer(reducer: Reducer<IAsyncState>, initArgs: IAsyncState): [any, Dispatch] {
  const state = ref(initArgs);
  const dispatch = (action: Action) => {
    state.value = reducer(state.value, action);
  };

  return [readonly(state), dispatch];
}

export default asyncReducer;
