import { MdWindow } from "react-icons/md"
import { TfiMenuAlt } from "react-icons/tfi"
import ButtonGroupLayout from "./ButtonGroupLayout"
import LayoutButton from "./LayoutButton"

const ViewButtonGroup = ({ layout, toggleLayout }) => {
    return (
        <ButtonGroupLayout>
            <LayoutButton Icon={MdWindow} handleClick={() => toggleLayout("card")} isActive={layout === "card"} />
            <LayoutButton Icon={TfiMenuAlt} handleClick={() => toggleLayout("list")} isActive={layout === "list"} />
        </ButtonGroupLayout>
    )
}

export default ViewButtonGroup