import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Card } from "react-bootstrap";
import { useStore } from "../store/store";
import ChatBox from "./chatBox";
import MiniChatBox from "./Mini-chatBox";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faEdit)

export default observer(function FriendList() {
    const users = [
        { username: 'hoainam10th', displayName: 'Nguyen Hoai Nam' },
        { username: 'ubuntu', displayName: 'Ubuntu Nguyen' },
        { username: 'lisa', displayName: 'Lisa' },
        { username: 'namnguyen', displayName: 'Nguyen Hoai Nam 2' }
    ];

    const { userOnlineStore: { userChatBox, usersOnline, miniChatBox, addUser, removeUser, addUserChatBox } } = useStore();

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
                        <div
                            onClick={() => addUserChatBox(user)}
                            key={index}
                            style={{ color: 'blue', padding: 5, borderRadius: 8, backgroundColor: 'whitesmoke' }}>
                            {user.displayName}
                        </div>
                    ))}
                </Card.Body>
            </Card>
            <div>
                {userChatBox.map((user, index) => (
                    <ChatBox key={index} user={user} />
                ))}
            </div>

            <div style={{ position: 'relative' }}>
                <div className="mini-list d-flex flex-column">
                    {miniChatBox.map((user, index) => (
                        <MiniChatBox key={index} user={user} />
                    ))}

                    <div style={{ margin: 5 }}>
                        <div className="edit d-flex align-items-center justify-content-center rounded-circle">
                            <FontAwesomeIcon icon={faEdit} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})