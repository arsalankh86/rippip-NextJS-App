function UserList({ users })
{
    return  <>  
    <h1>Users</h1>
    {
        users.map((user:any) => {
            return (
                <div key={user.id} >
                    {user.name}
                    {user.email}
                </div>
            )

        })
    }
    </>;


}

export default UserList


export async function getStaticProps(){

    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);

    return {
        props: {
          users: data, 
        },
    }
}
