import { Component } from "react";

class UserItem extends Component {
    render() {
        const { name, phone, email } = this.props
        return (
            <>
                <li>
                    <p>{name}</p>
                    <p>{phone}</p>
                    <p>{email}</p>
                </li>
            </>
        )
    }
}

export default UserItem