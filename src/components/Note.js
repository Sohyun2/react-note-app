import 'style/Note.css'
import "antd/dist/antd.css"

import { connect } from 'react-redux';
import { Component, Fragment } from 'react'
import { Button } from 'antd';

import SearchForm from 'components/SearchForm';
import NoteList from 'components/NoteList';

import { setPageNumber } from 'redux/modules/note';

const mapStateToProps = (state) => ({
    noteList: state.note.noteList,
    pageNumber: state.note.pageNumber,
    listCount: state.note.listCount
});

const mapDispatchToProps = (dispatch) => ({
    onSetPageNumber: (pageNumber) => dispatch(setPageNumber(pageNumber))
});

class Note extends Component {    
    render() {  
        const { noteList, pageNumber, listCount } = this.props;
        const maxPage = parseInt(noteList.length / listCount) === 0 ? 1 : parseInt(noteList.length / listCount) + 1; 

        const handleOnClick = (value) => {
            this.props.onSetPageNumber(pageNumber + value);
        }

        return (
            <Fragment>
                <div className='note-main-form'>
                    <SearchForm />
                    <NoteList />
                </div>
                <div className='note-main-bottom'>
                    {
                        pageNumber !== 1 
                        ? <Button style={{marginLeft: '5%'}} onClick={() => handleOnClick(-1)}>Prev</Button>    
                        : <Button style={{marginLeft: '5%', visibility: 'hidden'}} onClick={() => handleOnClick(-1)}>Prev</Button>    
                    }
                    <div> { pageNumber } </div>
                    {
                        pageNumber !== maxPage
                        ? <Button style={{marginRight: '5%'}} onClick={() => handleOnClick(1)}>Next</Button>
                        : <Button style={{marginRight: '5%', visibility: 'hidden'}} onClick={() => handleOnClick(1)}>Next</Button>
                    }
                    
                </div>
            </Fragment>
        )
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Note);