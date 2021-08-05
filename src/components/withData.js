
export const withData = (limitData) => {
    return (Component) => {
        return (props) => {
            return (<Component speakersData={props.speakers.slice(0, limitData)}></Component>)
        }
    }
}