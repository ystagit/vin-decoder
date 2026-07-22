import { connect } from 'react-redux';
import tabs from '@base/tabs'

import TabListComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors,
    tabs: tabs ?? []
})

export default connect(mapStateToProps)(TabListComponent);