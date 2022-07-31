
import { FriendItem, Status, Avatar, Name } from "./FriendListItem.styled"

export const FriendListItem = ({ avatar, name, isOnline,id }) => {

    return <FriendItem key={id}>
        <Status isOnline={isOnline}></Status>
        <Avatar src={avatar} alt="User avatar" width="48" />
        <Name>{name}</Name>
    </FriendItem>
}



 