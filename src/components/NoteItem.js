import 'style/NoteItem.css'
import "antd/dist/antd.css"

import {Component} from 'react'
import {connect} from 'react-redux';

import { selectedNote } from 'redux/modules/note';

const mapStateToProps = (state) => ({ });

const mapDispatchToProps = (dispatch) => ({
    onDoubleClick: (note) => dispatch(selectedNote(note))
});

class NoteItem extends Component {

    handleOnDoubleClick = () => {
        const {onDoubleClick, note} = this.props;        
        onDoubleClick(note);
    }
    
    render() {
        const {note} = this.props;

        return (
            <div className='note-item-template' onDoubleClick={this.handleOnDoubleClick}>
                <div className='note-item-title'>
                    {
                        note.title.length > 15 ? (
                            note.title.substr(0,15) + ' …'
                        ) : (note.title)
                    }
                </div>                  
                <div className='note-item-content'>
                    {
                        note.content.length > 25 ? (
                            note.content.substr(0,25) + ' …'
                        ) : (note.content)
                    }
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);