import { connect } from 'react-redux';
import { getVariableDetails } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import VariableDetailsPageComponent from './component';

const mapStateToProps = (state) => ({
    variableDetails: state.storage[StorageType.VARIABLE_DETAILS]
})

const mapDispatchToProps = (dispatch) => ({
    onGetVariableDetails: (id) =>
        dispatch(getVariableDetails(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VariableDetailsPageComponent);