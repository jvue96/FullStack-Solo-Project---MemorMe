import { takeLatest, put } from 'redux-saga/effects';
import axios from 'axios';

function* deleteEntries(action) {
    try {
    console.log(`HIT deleteEntries`);
    console.log(`action.payload is: `, action.payload);
    const id = action.payload.entryId
    
    const response = yield axios.delete(`/entry/${id}`);
    yield put({ type: 'GET_ENTRIES', payload: action.payload})
    }
    catch (error) {
      console.log(`Couldn't delete the user's entries`);
    }
}

function* deleteEntrySaga() {
    yield takeLatest('DELETE_ENTRY', deleteEntries);
  }

export default deleteEntrySaga;