import 'style/NoteList.css'
import "antd/dist/antd.css"

import {Component} from 'react'
import {connect} from 'react-redux';

import NoteItem from 'components/NoteItem'

const mapStateToProps = (state) => ({
    noteList: state.note.noteList,
    keyword: state.note.keyword,
    pageNumber: state.note.pageNumber,
    listCount: state.note.listCount
})

class NoteList extends Component {
    render() {
        const {noteList, keyword, pageNumber, listCount} = this.props;

        let viewList = [];
        let filterList = [];

        if(keyword === '') {
            const min = listCount * (pageNumber - 1) + 1;
            const max = pageNumber * listCount;

            filterList = [];
            noteList.map((item, index) => {
                const itemIndex = index+1;
                if(min <= itemIndex && itemIndex <= max) {
                    viewList.push(item);
                }
            });
        } else {
            noteList.map(item => {
                if(item.title.toLowerCase().includes(keyword.toLowerCase()) || item.content.toLowerCase().includes(keyword.toLowerCase())) {
                    filterList.push(item);
                }
            });
            viewList = filterList;
        }

        return (
            <div className='note-list-template'>
                {
                    viewList.map((item) => {
                        return(
                            <NoteItem key={item.index} note={item} />
                        )
                    })
                }
                
            </div>
        )
    }
}

export default connect(mapStateToProps)(NoteList);