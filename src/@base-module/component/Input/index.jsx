import { connect } from 'react-redux';
import { validateField } from '@base/reducer/errors/actions';

import InputComponent from './component';

const mapStateToProps = (state, props) => ({
    colors: state.colors
})

const mapDispatchToProps = (dispatch, props) => ({
    onValidateField: (data) =>
        dispatch(validateField(props.name, data))
})

export default connect(mapStateToProps, mapDispatchToProps)(InputComponent);