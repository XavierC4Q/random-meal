import { reactive, readonly } from "vue";
import { Reducer, IAsyncState, Action } from "../types/index";
import { onMounted } from '@vue/runtime-core';
import fetch from 'isomorphic-unfetch';

function useFetchMeal(
  reducer: Reducer<IAsyncState>,
  initArgs: IAsyncState
): Readonly<IAsyncState> {
  const state = reactive(initArgs);

  const dispatch = (action: Action) => {
    Object.assign(state, reducer(state, action));
  };

  const getMeal = async () => {
    dispatch({ type: "loading" });
    try {
      const req = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      const data = await req.json();
      dispatch({ type: "success", payload: data.meals[0] });
    } catch {
      dispatch({ type: "error" });
    }
  };

  onMounted(() => getMeal())

  return readonly(state);
}

export default useFetchMeal;
