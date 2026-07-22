import { connect } from 'react-redux';
import { getVariableDetails, clean } from '@vin/reducer/vin/actions';
import { isMainLoader } from '@base/reducer/loader/getter';
import StorageType from '@/storages';

import VariableDetailsPageComponent from './component';

const mapStateToProps = (state) => ({
    loading: isMainLoader(state),
    variableDetails: state.storage[StorageType.VARIABLE_DETAILS]
})

const mapDispatchToProps = (dispatch) => ({
    onGetVariableDetails: (id) =>
        dispatch(getVariableDetails(id)),
    onClean: () =>
        dispatch(clean(StorageType.VARIABLE_DETAILS))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VariableDetailsPageComponent);