

function ChildComponentTwo(props){

    return(

        <div>
            <h2>Child Component Two</h2>
            {/* <ul>
                

                    <li>{props.user[0].name+" | "+props.user[0].city}</li>
                    <li>{props.user[1].name+" | "+props.user[1].city}</li>
                
            </ul> */}

            <ul>
                {
                    props.user.map((user)=>(

                        <li key={user.id}>
                            {user.id+ " | " +user.name +" | "+ user.city}
                        </li>


                    ))
                }
            </ul>
        </div>
    )
}

export default ChildComponentTwo