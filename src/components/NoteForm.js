import 'style/NoteForm.css'
import "antd/dist/antd.css"

import {Component, Fragment} from 'react'
import {connect} from 'react-redux';

import { Button, Input } from 'antd';

import { selectedNote } from 'redux/modules/note';

const { TextArea } = Input;

const mapStateToProps = (state) => ({
    selectedNoteItem: state.note.selectedNoteItem
});

const mapDispatchToProps = (dispatch) => ({
    onClick: (note) => dispatch(selectedNote(note))
});


class NoteForm extends Component {
    handleOnClick = () => {
        const {onClick} = this.props;
        onClick({index: -1});
    }
    
    render() {
        const {selectedNoteItem} = this.props;
        
        return(
            <Fragment>
                <div className='note-main-form'>
                    <Input className='search-form-input'
                        value={selectedNoteItem.title} />
                    <TextArea showCount maxLength={100}
                        rows={18} 
                        value={selectedNoteItem.content} 
                        autoSize={{ minRows: 18, maxRows: 18 }}
                        />
                </div>
                <div className='note-main-bottom'>
                    <Button style={{marginLeft: '5%'}}
                        onClick={this.handleOnClick}>Prev</Button>
                </div>
            </Fragment>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteForm);