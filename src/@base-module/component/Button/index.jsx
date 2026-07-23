import { connect } from 'react-redux';

import ButtonComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors,
})

export default connect(mapStateToProps)(ButtonComponent);