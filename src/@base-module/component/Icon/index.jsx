import { connect } from 'react-redux';

import IconComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors
})

export default connect(mapStateToProps)(IconComponent);