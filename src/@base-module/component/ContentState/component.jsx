import './index.css';

const ContentStateComponent = ({ colors, title, containerStyle }) => {

    return (
        <div
            className={'content-state-container'}
            style={containerStyle}
        >
            <div
                className={'content-state-box'}
                style={{
                    '--content-state-border-color': colors.contentState.border,
                    '--content-state-background-color': colors.contentState.background
                }}
            >
                <div
                    className={'content-state-title'}
                    style={{
                        '--content-state-title-color': colors.contentState.title
                    }}
                >
                    {title}
                </div>
            </div>
        </div>
    )
}

export default ContentStateComponent;