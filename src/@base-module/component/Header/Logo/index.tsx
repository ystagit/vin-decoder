import { connect } from 'react-redux';

import LogoComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors,
})

export default connect(mapStateToProps)(LogoComponent);