import { takeLatest, /* put */ } from 'redux-saga/effects';
import axios from 'axios';

function* editEntries(action) {
    try {
    const id = action.payload.entryId
    yield axios.put(`/entry/edit/${id}`, action.payload);
    }
    catch (error) {
      alert(`Error editing entries! Try again later!`)
    }
}

function* editEntrySaga() {
    yield takeLatest('EDIT_ENTRY', editEntries);
}

export default editEntrySaga;