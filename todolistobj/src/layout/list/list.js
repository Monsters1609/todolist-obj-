export default function List ({id, listKey, userName, Age, Gender, Job}) {
    return(
        <div className="ListUser">
            <div className="TableList">
                <table>
                    <thead>
                        <tr>
                            <th>Stt</th>
                            {
                                listKey.map((value,index) => {
                                    return(
                                        <th key={index}>{value}</th>

                                    )
                                })
                            }
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                {
                                    userName.map((value,index)=>{
                                        return(
                                            <div className="Item" key={index}>
                                                {index}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td>
                                {
                                    userName.map((value,index)=>{
                                        return(
                                            <div className="Item" key={index}>
                                                {value}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td>
                                {
                                    Age.map((value,index)=>{
                                        return(
                                            <div className="Item" key={index}>
                                                {value}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td>
                                {
                                    Gender.map((value,index)=>{
                                        return(
                                            <div className="Item" key={index}>
                                                {value}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                            <td>
                                {
                                    Job.map((value,index)=>{
                                        return(
                                            <div className="Item" key={index}>
                                                {value}
                                            </div>
                                        )
                                    })
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}