export default function TableDone ({userAccept, HandleDeleteAccept}) {
    let STT=1;
    const HandleDeleteUserAccept = (index) => {
        HandleDeleteAccept(index)
    }
    return(
        <div className="TableDone">
            <h4 className="TitleTableDone"> Complete List Table</h4>
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
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {userAccept.map((value,index)=>{
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
                                    <button onClick={()=>HandleDeleteUserAccept(index)}>Delete</button>
                                </td>
                            </tr>
                        )
                    })    
                    }
                </tbody>
            </table>
        </div>
    )
}