import React from 'react'

export default class login extends React.Component {
    render() {
        return (
            <div><br></br>
                <form>
                    <div>
                        <input type="text" name="username" placeholder="Username" />
                        <label htmlFor="username">Username</label>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" />
                        <label htmlFor="password">Password</label>
                    </div>
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}
