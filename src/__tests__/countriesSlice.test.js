import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import reducer, {
  countriesFetch,
  searchTitle,
  filterRegion,
  search,
  filter,
} from '../redux/slices/getCountries';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Redux Slice', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      countries: {
        countries: [],
        error: '',
        loading: false,
        nameSearch: [],
        regionFilter: [],
        search: '',
        filter: '',
      },
    });
  });

  describe('Action Creators', () => {
    it('should create an action to fetch countries', async () => {
      const expectedAction = {
        type: 'countries/countriesFetch/pending',
        meta: {
          requestId: expect.any(String),
          requestStatus: 'pending',
        },
      };

      await store.dispatch(countriesFetch());
      const actions = store.getActions();

      expect(actions[0]).toEqual(expectedAction);
    });

        it('should create an action to search countries by title', () => {
            const searchQuery = 'Germany';
            const expectedAction = { type: 'countries/searchTitle', payload: searchQuery };

            const action = searchTitle(searchQuery);
            expect(action).toEqual(expectedAction);
        });

        it('should create an action to filter countries by region', () => {
            const region = 'Europe';
            const expectedAction = { type: 'countries/filterRegion', payload: region };

            const action = filterRegion(region);
            expect(action).toEqual(expectedAction);
        });

        it('should create an action to set the search query', () => {
            const searchQuery = 'search query';
            const expectedAction = { type: 'countries/search', payload: searchQuery };

            const action = search(searchQuery);
            expect(action).toEqual(expectedAction);
        });

        it('should create an action to set the filter', () => {
            const filterValue = 'filter value';
            const expectedAction = { type: 'countries/filter', payload: filterValue };

            const action = filter(filterValue);
            expect(action).toEqual(expectedAction);
        });
    });
})