function Home () {
    const logindetails = JSON.parse((localStorage.getItem("User")));
    console.log(logindetails)

    const Homedetails = ({})

    logindetails.filter((e) => {
        Homedetails.username = e.username
        Homedetails.phonenumber = e.phonenumber
        Homedetails.mailid = e.mailid
    })

    return (
        <>
            <h2>Home</h2>
            <h4>{Homedetails.username}</h4>
            <h3>Contact Details</h3>
            <h4>Phone number: {Homedetails.phonenumber}</h4>
            <h4>Password: {Homedetails.mailid}</h4>
        </>
    )
}

export default Home