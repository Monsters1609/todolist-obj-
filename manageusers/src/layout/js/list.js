// import { Link } from "react-router-dom";

export default function List ({HandleDelete, dataUser, detailUser, handleAccept}) {
    let STT = 1; 
    const HandleDeleteUser = (index) => {
        HandleDelete(index)
    }
    const handleSelect = (value,index) => {
        detailUser(value,index);
    }
    const handleSelectAccept = (value,index) => {
        handleAccept(value,index);
    }
    return(
        <div className='List'>
            <h4 className="TitleTableList">User List</h4>
            <table>
                <thead>
                    <tr>
                        <th>STT</th>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Job</th>
                        <th>Email</th>
                        <th>Update</th>
                        <th>Done</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {dataUser.map((value,index)=>{
                        return(
                            <tr key={index}>
                                <td>{STT++}</td>
                                <td>{value.id}</td>
                                <td style={{textAlign:'left'}}>{value.name}</td>
                                <td>{value.age}</td>
                                <td>{value.gender}</td>
                                <td>{value.job}</td>
                                <td style={{textAlign:'left'}}>{value.email}</td>
                                <td>
                                    <button onClick={()=>handleSelect(value,index)}>Update</button>
                                </td>
                                <td>
                                    <button onClick={()=>handleSelectAccept(value,index)}>Accept</button>
                                </td>
                                <td>
                                    <button onClick={()=>HandleDeleteUser(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}