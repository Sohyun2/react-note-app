// 액션
const ADD_NOTE = "note/ADD_NOTE";
const KEYWORD = 'note/KEYWORD';
const SELECTED_NOTE = 'note/SELECTED_NOTE'
const PAGE_NUMBER = 'note/PAGE_NUMBER'
const LIST_COUNT = 'note/LIST_COUNT'


// 액션함수 선언
let noteId = 2;
export const addNote = (title, content) => ({
    type: ADD_NOTE,
    note: {
        index: noteId++,
        title,
        content
    }
});

export const setKeyWord = (keyword) => ({ 
    type: KEYWORD, 
    keyword 
});

export const selectedNote = (selectedNoteItem) => ({
    type: SELECTED_NOTE,
    selectedNoteItem
});

export const setPageNumber = (pageNumber) => ({
    type: PAGE_NUMBER,
    pageNumber
});

export const getListCount = (listCount) => ({
    type: LIST_COUNT,
    listCount
});

/* 초기상태 선언 */
const initialState = {
    // noteList: [
    //     {index: 1, title: '1', content: '라바마사'},
    //     {index: 2, title: '2', content: 'DEFG'},
    //     {index: 3, title: '3', content: '3'}
    // ],
    noteList: [],
    keyword: '',
    selectedNoteItem: {index: -1},
    pageNumber: 1,
    listCount: 5
};

// 리듀서 생성
export default function note(state = initialState, action) {
    switch(action.type) {
        case ADD_NOTE: 
            return {
                ...state,
                noteList: state.concat(action.todo)
            }
        case KEYWORD:
            return {
                ...state,
                keyword: action.keyword
            }
        case SELECTED_NOTE:
            return {
                ...state,
                selectedNoteItem: action.selectedNoteItem
            }
        case PAGE_NUMBER:
            return {
                ...state,
                pageNumber: action.pageNumber
            }
        case LIST_COUNT:
            return {
                ...state,
                listCount: action.listCount
            }
        default:
            return state;
    }
}