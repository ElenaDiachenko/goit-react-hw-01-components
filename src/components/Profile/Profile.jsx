import { ProfileContainer, DescriptionWrap, Avatar,UserName,Tag,Location,StatsList,StatsItem,ItemLabel,ItemAmount } from "./Profile.styled"
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return <ProfileContainer>
        <DescriptionWrap>
            <Avatar
          src={avatar}
          alt="User avatar"
        />
        <UserName>{username}</UserName>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionWrap>
      <StatsList>
        <StatsItem>
          <ItemLabel>Followers</ItemLabel>
          <ItemAmount>{stats.followers}</ItemAmount>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Views</ItemLabel>
          <ItemAmount>{stats.views}</ItemAmount>
        </StatsItem>
        <StatsItem>
          <ItemLabel>Likes</ItemLabel>
          <ItemAmount>{stats.likes}</ItemAmount>
        </StatsItem>
      </StatsList>
    </ProfileContainer>
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}