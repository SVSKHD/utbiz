import UHeader from "./header"

const ULayout = (props) => {
    return (
        <>
            <UHeader />
            {props.children}
        </>
    )
}
export default ULayout