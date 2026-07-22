import { connect } from 'react-redux';

import NotFoundPageComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors
})

export default connect(mapStateToProps)(NotFoundPageComponent);