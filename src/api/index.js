import {SAVE_SEGMENT_URL} from "../constants"
import axios from 'axios';

export const saveSegmentApi = async (body) => {
    return await axios.post(SAVE_SEGMENT_URL,{...body})
}