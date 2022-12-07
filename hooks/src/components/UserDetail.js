function UserDetail(props){
    return(
        <div className="userDetail">
            <p>{props.name}</p> 
            <p>{props.email}</p>
        </div>
    )
}
export default UserDetail;