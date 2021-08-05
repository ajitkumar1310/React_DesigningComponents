
export const Toolbar = ({ showSessions, setShowSessions }) => {

    const checkBoxClicked = (e) => {
        console.log(e.currentTarget.checked);
        setShowSessions(e.currentTarget.checked)
    }
    return (
        <div>
            <label>Show Sessions</label>
            <input type='checkbox' checked={showSessions} onClick={(e) => { checkBoxClicked(e) }}
            />
        </div>
    )
}