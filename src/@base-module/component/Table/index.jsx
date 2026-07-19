import { connect } from 'react-redux';

import TableComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors
})

export default connect(mapStateToProps)(TableComponent);