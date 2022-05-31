import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useStore } from "../store/store";
import ChatBox from "./chatBox";

export default observer(function FriendList() {
    const users = [
        { username: 'hoainam10th', displayName: 'Nguyen Hoai Nam' },
        { username: 'ubuntu', displayName: 'Ubuntu Nguyen' },
        { username: 'lisa', displayName: 'Lisa' },
        { username: 'namnguyen', displayName: 'Nguyen Hoai Nam 2' }
    ];

    const { userOnlineStore: { userChatBox, usersOnline, addUser, removeUser, addUserChatBox } } = useStore();

    useEffect(() => {
        users.forEach(user => {
            addUser(user);
        })

        return () => {
            usersOnline.forEach(user => {
                removeUser(user.username);
            })
        }
    }, [])
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Header>User online</Card.Header>
                <Card.Body>
                    <Card.Title>{usersOnline.length} online</Card.Title>
                    {usersOnline.map((user, index) => (
                        <div onClick={() => addUserChatBox(user)} key={index} style={{ color: 'blue', padding: 5, borderRadius: 8 }}>{user.displayName}</div>
                    ))}
                </Card.Body>
            </Card>
            <div>
                {userChatBox.map((user, index) =>(
                    <ChatBox key={index} user={user} />
                ))}         
            </div>
        </>
    );
})