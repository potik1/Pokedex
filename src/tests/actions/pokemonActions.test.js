import configureMockStore from 'redux-mock-store';
import moxios from 'moxios';
import axios from 'axios';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import * as actions from '../../actions/index';
import * as types from '../../actions/type';

describe('test of function loadingError ( true or false)', () => {
  test('Valid response', () => {
    const hasError = false;
    const expectedAction = {
      type: types.LOADING_ERROR,
      hasError,
    };
    expect(typeof (actions.loadingError(hasError))).toEqual('object');
    expect(actions.loadingError(hasError)).toEqual(expectedAction);
  });
});

describe('test of function loading (true or false)', () => {
  test('Valid response', () => {
    const loading = true;
    const expectedAction = {
      type: types.LOADING_POKEMON,
      loading,
    };
    expect(typeof (actions.loading(loading))).toEqual('object');
    expect(actions.loading(loading)).toEqual(expectedAction);
  });
});

describe('test of function loadingList (true or false)', () => {
  test('Valid response', () => {
    const loadingList = true;
    const expectedAction = {
      type: types.LOADING_LIST,
      loadingList,
    };
    expect(typeof (actions.loadingList(loadingList))).toEqual('object');
    expect(actions.loadingList(loadingList)).toEqual(expectedAction);
  });
});

describe('test of function errorReset', () => {
  test('Valid response', () => {
    const expected = {
      type: types.ERROR_RESET,
    };
    expect(typeof (actions.errorReset())).toEqual('object');
    expect(actions.errorReset()).toEqual(expected);
  });
});

describe('getPokemonsList function test', () => {
  describe('dispatch actions', () => {
    const limit = 10;
    const dispatch = jest.fn();

    test('Dispatch LoadingList and ErrorReset', () => {
      const getPokemonList = actions.getPokemonList(1, limit);
      getPokemonList(dispatch);

      const expectedAction = {
        type: types.LOADING_LIST,
        loadingList: true,
      };
      expect(dispatch).toBeCalledWith(expectedAction);

      const expectErrorResetAction = {
        type: types.ERROR_RESET,
      };
      expect(dispatch).toBeCalledWith(expectErrorResetAction);
      dispatch.mockClear();
    });
  });

  describe('server response', () => {
    const expectedUrl = 'https://pokeapi.co/api/v2/pokemon/?$limit=10&offset=10';
    const mockStore = configureMockStore([thunk]);

    beforeEach(() => moxios.install());
    afterEach(() => moxios.uninstall());

    /* test.only('valid server response', (done) => {
      moxios.wait(() => {
        const request = moxios.requests.mostRecent();
        request.respondWith({
          status: 200,
          response: 'something',
        });

        const expectedActions = {
          type: types.LOADING_LIST,
          payload: 'something',
        };

        const store = mockStore({});

        return store.dispatch(actions.getPokemonList('anyData')).then(() => {
          expect(store.getActions()).toEqual(expectedActions);
          done();
        });
      });
    }); */
  });
});
