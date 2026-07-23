const Divider = ({
    weight = 1,
    width = '100%',
    align = 'left',
    orientation = 'horizontal',
    bg = 'transparent',
    color = '#d1d1d1',
    style = null
}) => {

    return <div style={{
        display: 'flex',
        justifyContent: 'horizontal' === orientation ? align : 'left',
        alignItems: 'vertical' === orientation ? align : 'left',
        width: 'horizontal' === orientation ? '100%' : weight,
        height: 'vertical' === orientation ? '100%' : weight,
        background: bg,
    }}>
        <div style={{
            width: 'horizontal' === orientation ? width : weight,
            height: 'vertical' === orientation ? width : weight,
            background: color,
            ...style
        }}/>
    </div>
}

export default Divider;