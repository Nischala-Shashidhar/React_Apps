import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import NewMeasureForm from '../components/NewMeasureForm';
import createMeasure from '../store/newMeasure/action';

class NewMeasure extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    onChangeHandle(fieldName, fieldValue) {
        this.setState({[fieldName]: fieldValue})
    }

    onCreateMeasureBtnClick(e) {
        const {dispatch, history} = this.props;
        console.log(this.state)
        const measureData = this.state;
        dispatch(createMeasure(measureData));
        history.push('/measureDetails');
    }

    render() {
        return(
            <div>
                <NewMeasureForm onBtnClick={e => this.onCreateMeasureBtnClick(e)} onChangeHandle={(fieldName, fieldValue) => this.onChangeHandle(fieldName, fieldValue)}/>
            </div>
        )
    }

}

NewMeasure.propType = {
    dispatch:PropTypes.func
}

export default connect()(NewMeasure);