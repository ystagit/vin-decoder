import { connect } from 'react-redux';
import { getVehicleVariableList, getVariableDetails, clean } from '@vin/reducer/vin/actions';
import { isMainLoader } from '@base/reducer/loader/getter';
import StorageType from '@/storages';

import VariableDetailsPageComponent from './component';

const mapStateToProps = (state) => ({
    loading: isMainLoader(state),
    vehicleVariables: state.storage[StorageType.VEHICLE_VARIABLES],
    variableDetails: state.storage[StorageType.VARIABLE_DETAILS]
})

const mapDispatchToProps = (dispatch) => ({
    onGetVehicleVariableList: () =>
        dispatch(getVehicleVariableList()),
    onGetVariableDetails: (id) =>
        dispatch(getVariableDetails(id)),
    onClean: () =>
        dispatch(clean(StorageType.VARIABLE_DETAILS))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VariableDetailsPageComponent);