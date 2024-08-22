import Buttons from "../Components/Buttons";
import ButtonsLink from "../Components/ButtonsLink";
import Menu from "../Components/Menu";

const Frontend = (props) => {

    return(
        <>
            <Menu title="Rocio"></Menu>
            {props.children}
        </>
    );
}

export default Frontend;