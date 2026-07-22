import { connect } from 'react-redux';

import MessageComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors
})

export default connect(mapStateToProps)(MessageComponent);