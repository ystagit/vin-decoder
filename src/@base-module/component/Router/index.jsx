import { connect } from 'react-redux';

import RouterComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors
})

const mapDispatchToProps = (dispatch) => ({
    dispatch,
});

export default connect(mapStateToProps, mapDispatchToProps)(RouterComponent);