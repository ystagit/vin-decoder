import { connect } from 'react-redux';

import InputCounterComponent from './component';

const mapStateToProps = (state, props) => ({
    colors: state.colors,
    errorMessage: state.errors[props.name] ?? null
})

export default connect(mapStateToProps)(InputCounterComponent);