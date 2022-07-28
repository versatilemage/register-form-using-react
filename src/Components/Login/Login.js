import "./Login.css"

function Login ({details}) {
    return (
        <>
        <div className="login-form-container">
            <h2 className="form-header">LOG-IN</h2>
                <form className="login-form">
                    <input 
                        type="text"
                        placeholder="Username"
                        value={details.username}/>

                    <input 
                        type="password"
                        placeholder="password"
                        value={details.password}/>

                    <button className="signin-submit-button">
                        submit
                    </button>
                </form>
        </div>
        </>
    )
}

export default Login