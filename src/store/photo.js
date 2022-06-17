import { PHOTO_GET } from "../Api";

const FETCH_PHOTO_STARTED = 'photo/fetchStarted';
const FETCH_PHOTO_SUCESS = 'photo/fetchSucess';
const FETCH_PHOTO_ERROR = 'photo/fetchError';

const fetchPhotoStarted = () => ({type: FETCH_PHOTO_STARTED});

const fetchPhotoSucess = (data) => ({
  type: FETCH_PHOTO_SUCESS,
  payload: data
});

const fetchPhotoError = (error) => ({
  type: FETCH_PHOTO_ERROR,
  payload: error
});

const initialState = {
  loading: false,
  error: null,
  data: null
};

export default function photo(state = initialState, action) {
  switch(action.type) {
    case FETCH_PHOTO_STARTED: 
      return {
        ...state,
        loading: true,
        error: null,
        data: null
      };
    case FETCH_PHOTO_SUCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null
      };
    case FETCH_PHOTO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        data: null
      }
    default: 
      return state
  }
};

export const fetchPhoto = (id) => async (dispatch) => {
  try {
    dispatch(fetchPhotoStarted());
    const { url, options } = PHOTO_GET(id)
    const response = await fetch(url, options);
    if(response.ok === false) throw new Error(data.message);
    const data = await response.json();
    dispatch(fetchPhotoSucess(data))
  } catch(err) {
    dispatch(fetchPhotoError(err.message));
  }
}
