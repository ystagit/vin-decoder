import { connect } from 'react-redux';

import ContentStateComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors,
})

export default connect(mapStateToProps)(ContentStateComponent);