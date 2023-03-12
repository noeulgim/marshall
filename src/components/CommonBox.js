import MoreBtn from './MoreBtn';

function CommonBox(props) {
    const Style = {
        position: 'absolute',
        left: 0,
        right: 0,
        textAlign: 'center'
    };
    const StyleEx = {
        color: '#fff',
        fontSize: '1.6rem',
        letterSpacing: '.05rem',
        marginTop: '1.6rem',
        lineHeight: 1.35,
        fontWeight: 300
    }
    return (
        <div style ={Style} class="common-banner">
            <h1>{props.title}</h1>
            <h3 style={StyleEx}>{props.explain}</h3>
            <MoreBtn title={props.text} />
        </div>
    )
}

export default CommonBox;