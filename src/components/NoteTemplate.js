import 'style/NoteTemplate.css'

import {Component} from 'react'
import {connect} from 'react-redux';

import Note from 'components/Note'
import NoteForm from 'components/NoteForm'

const mapStateToProps = (state) => ({
    selectedNoteItem: state.note.selectedNoteItem
});

class NoteTemplate extends Component { 
    render() {  
        const {selectedNoteItem} = this.props;

        return (
            <div className='note-template'>                
                <div className='note-title'>
                    Notes App
                </div>
                {
                    selectedNoteItem.index === -1
                    ? <Note />
                    : <NoteForm />
                }
            </div>
        )
    }
}

export default connect(mapStateToProps)(NoteTemplate);