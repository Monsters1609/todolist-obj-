export default function Header () {
    return(
        <div className="Header">
            <div className="HeaderLeft">
                <p><i className="bi bi-house-fill"></i> / Welcome to the ToDoList</p>
            </div>
            <div className="HeaderRight">
                <i className="bi bi-person-square"></i>
                <i className="bi bi-bell-fill"></i>
                <i className="bi bi-gear-fill"></i>
                <i className="bi bi-box-arrow-right" id="close"></i>
            </div>
        </div>
    )
}