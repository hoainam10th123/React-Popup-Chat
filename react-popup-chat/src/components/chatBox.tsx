import { Card, Form, Button } from "react-bootstrap";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClose, faMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IUser } from "../models/user";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../store/store";

library.add(faMinus, faClose)

interface Props{
    user: IUser;
}

export default observer(function ChatBox({user}: Props) {
    const {userOnlineStore:{removeUserChatBox, addMiniChatBox}} = useStore();

    useEffect(() =>{
        var chatBox = document.getElementById(user.username);
        chatBox!.style.right = user.right + "px";
    })
    return (
        <div id={user.username} className="chat-box">
            <Card className="border-primary">
                <Card.Header className="d-flex align-items-center">
                    <img height={50} src="/user.png" alt="" className="rounded-circle" />
                    <div className="text-primary">{user.displayName}</div>
                    <div className="child-right">
                        <a className="mr-5" onClick={() => addMiniChatBox(user)}><FontAwesomeIcon icon={faMinus} /></a>
                        <a className="mr-5" onClick={() => removeUserChatBox(user.username)}><FontAwesomeIcon icon={faClose} /></a>
                    </div>
                </Card.Header>

                <Card.Body>
                    <ul style={{height: 300}} className="chat">
                        <li className="mr-5">
                            <div className="d-flex">
                                <img height={40} src="/user.png" alt="" className="mr-5 rounded-circle" />
                                <div className="message-body">tin nhan o day. tin nhan o day. tin nhan o day</div>
                            </div>
                        </li>
                        <li className="mr-5">
                            <div className="parent-sent">
                                <div className="message-body">tin nhan o day. tin nhan o day</div>
                            </div>
                        </li>
                    </ul>
                </Card.Body>

                <Card.Footer>
                    <Form>
                        <Form.Group className="d-flex" controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Enter message" />
                            <Button variant="primary" type="submit">Send</Button>
                        </Form.Group>                        
                    </Form>
                </Card.Footer>
            </Card>
        </div>
    );
})