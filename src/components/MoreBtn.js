function MoreBtn(props) {
    const style = {
        border: '1px solid #fff',
        borderRadius: '.1rem',
        backgroundColor: '#fff',
        color: '#000',
        fontFamily: 'HelveticaNeueLTPro-BdCn',
        fontSize: '1.4rem',
        fontWeight: 300,
        lineHeight: 1.14286,
        letterSpacing: '.05rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: '1.1rem 3rem .9rem',
        // marginTop: '2rem'
    };
    return (
        <button style={style}>{props.title}</button>
    )
}

export default MoreBtn;