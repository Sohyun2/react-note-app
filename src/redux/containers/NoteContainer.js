import {connect} from 'react-redux';

import NoteTemplate from "components/NoteTemplate";
import { addNote } from 'redux/modules/note';

const mapStateToProps = (state) => ({
    noteList: state.note.noteList
});

const mapDispatchToProps = (dispatch) => ({
    onAddList: () => dispatch(addNote())
})

const NoteContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NoteTemplate)
 
export default NoteContainer;