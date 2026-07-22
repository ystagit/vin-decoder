import { connect } from 'react-redux';
import { getVehicleVariableList } from '@vin/reducer/vin/actions';
import StorageType from '@/storages';

import VariablesPageComponent from './component';

const mapStateToProps = (state) => ({
    vehicleVariables: state.storage[StorageType.VEHICLE_VARIABLES]
})

const mapDispatchToProps = (dispatch) => ({
    onGetVehicleVariableList: () =>
        dispatch(getVehicleVariableList())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(VariablesPageComponent);