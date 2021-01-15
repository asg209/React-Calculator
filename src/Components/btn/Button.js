import {Button } from 'react-bootstrap';


const importedButton = (anything) => {
    const buttonDrip = {
        width: "60px",
        height: "60px",
        backgroundColor: "Maroon",
        padding: "10px",
        borderColor: "Black",
        fontWeight: "Bold",
        fontSize: "20px"
    }
    const handleClick = () => anything.onClick(anything.increment)
    return (
        <Button style={buttonDrip} onClick={handleClick}>
            {anything.increment}
        </Button>
    )
}
export default importedButton;