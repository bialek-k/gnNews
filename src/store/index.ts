import {
  createSlice,
  configureStore,
  PayloadAction,
  combineReducers,
} from "@reduxjs/toolkit";
import { newsApi } from "../api/newsApi";

interface CountryState {
  name: string;
  code: string;
}

const initialCountryState: CountryState = {
  name: "United States",
  code: "us",
};

const countrySlice = createSlice({
  name: "country",
  initialState: initialCountryState,
  reducers: {
    changeCountry(state, action: PayloadAction<CountryState>) {
      state.name = action.payload.name;
      state.code = action.payload.code;
    },
  },
});

interface ViewListState {
  view: "list" | "grid";
}

const initialViewListState: ViewListState = {
  view: "list",
};

const viewListSlice = createSlice({
  name: "viewList",
  initialState: initialViewListState,
  reducers: {
    changeViewList(state, action: PayloadAction<ViewListState>) {
      state.view = action.payload.view;
    },
  },
});

interface NumberOfArticlesState {
  quantity: number;
}

const initialNumberOfArticlesState: NumberOfArticlesState = {
  quantity: 1,
};

const numberOfArticlesSlice = createSlice({
  name: "numberOfArticles",
  initialState: initialNumberOfArticlesState,
  reducers: {
    setNumberOfArticle(state, action: PayloadAction<NumberOfArticlesState>) {
      state.quantity = action.payload.quantity;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      newsApi.endpoints.getArticleByCountry.matchFulfilled,
      (state, action) => {
        state.quantity = action.payload.articles.length;
      }
    );
  },
});

const rootReducer = combineReducers({
  [newsApi.reducerPath]: newsApi.reducer,
  country: countrySlice.reducer,
  view: viewListSlice.reducer,
  quantity: numberOfArticlesSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
});

export const countryActions = countrySlice.actions;
export const viewListsActions = viewListSlice.actions;
export const numberOfArticlesActions = numberOfArticlesSlice.actions;

export type RootState = ReturnType<typeof rootReducer>;
