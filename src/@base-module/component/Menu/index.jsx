import { connect } from 'react-redux';
import { setColor } from '@base/reducer/colors/actions';

import MenuComponent from './component';

const mapStateToProps = (state) => ({
    colors: state.colors,
})

const mapDispatchToProps = (dispatch) => ({
    onSetColor: (style) =>
        dispatch(setColor(style))
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuComponent);