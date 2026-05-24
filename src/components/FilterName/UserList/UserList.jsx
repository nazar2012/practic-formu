import { Component } from "react";
import UserItem from "../UserItem/UserItem";

class UserList extends Component {
    render() {
        const { filtered } = this.props
        return (
            <>
                <ul>
                    {filtered.map(({ name, phone, email }, index) => {
                        return (
                            <UserItem key={index} name={name} phone={phone} email={email} />
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default UserList