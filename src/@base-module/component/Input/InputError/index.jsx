import { connect } from 'react-redux';

import InputErrorComponent from './component';

const mapStateToProps = (state, props) => ({
    colors: state.colors,
    errorMessage: state.errors[props.name] ?? null
})

export default connect(mapStateToProps)(InputErrorComponent);