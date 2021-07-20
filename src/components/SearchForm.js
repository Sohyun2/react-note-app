import 'style/SearchForm.css'
import "antd/dist/antd.css"

import {connect} from 'react-redux';
import { Component } from 'react'

import { Input } from 'antd';
import { setKeyWord } from 'redux/modules/note';

const mapStateToProps = (state) => ({
    keyword: state.note.keyword
});

const mapDispatchToProps = (dispatch) => ({
    onChange: (keyword) => dispatch(setKeyWord(keyword))
});

class SearchForm extends Component {
    handleOnChange = (e) => {
        this.props.onChange(e.target.value);
    }

    render() {
        const { keyword } = this.props;
        
        return (
            <div className='search-form-template'>
                <Input className='search-form-input'
                    placeholder='input search text' 
                    value={keyword} 
                    onChange={this.handleOnChange}
                    onKeyPress={this.handleOnKeyPress} />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);