import {Component} from 'react'
import {connect} from 'react-redux';

import NoteTemplate from 'components/NoteTemplate';

const mapStateToProps = (state) => ({
  noteList: state.note.noteList
});

class App extends Component {
  render() {
    const {noteList} = this.props;

    console.log(noteList);
    return(
      <NoteTemplate />
    )
  }
}

export default connect(mapStateToProps)(App);