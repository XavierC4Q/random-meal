export type Action = { type: "loading" | "error" | "success"; payload?: any };

export type Dispatch = (action: Action) => void;

export type Reducer<T> = (state: T, action: Action) => T;

export interface IMeal {
  [key: string]: string | null;
}
export interface IAsyncState {
  loading: boolean;
  error: boolean;
  meal: null | IMeal;
}
