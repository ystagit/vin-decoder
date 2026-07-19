import { connect } from 'react-redux';

import RouterComponent from './component';

const mapDispatchToProps = dispatch => ({
    dispatch,
});

export default connect(null, mapDispatchToProps)(RouterComponent);