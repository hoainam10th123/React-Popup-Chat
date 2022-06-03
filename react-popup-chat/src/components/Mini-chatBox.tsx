import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { IUser } from '../models/user';
import { useStore } from '../store/store';
library.add(faTimesCircle)

interface Props{
    user: IUser;
}

export default observer(function MiniChatBox({user}: Props){
    const {userOnlineStore:{restoreMiniChatBox, removeMiniChatBox}} = useStore();
    const [isHidden, setHidden] = useState(false);
    
    function mouseOver(){
        setHidden(true);
    }

    function mouseOut(){
        setHidden(false);
    }

    return (
        <div style={{margin: 5, position: 'relative'}} onMouseOver={mouseOver} onMouseLeave={mouseOut}>
            <img onClick={() => restoreMiniChatBox(user)} height={45} src="user.png" alt="" className="rounded-circle img-person" />
            {isHidden ? (<span className="label-u" onClick={() => removeMiniChatBox(user.username)}> <FontAwesomeIcon icon={faTimesCircle} /> </span>) : null}            
        </div>
    );
})