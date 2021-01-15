const Display = (props) =>{
    const fontStyle = {
        fontWeight: "Bold",
        fontSize: "50px"
    }
    return(
        <div style={fontStyle}>{props.message}</div>
    )
}
export default Display;