import { connect } from 'react-redux';

import ListComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors
})

export default connect(mapStateToProps)(ListComponent);