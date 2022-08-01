
import PropTypes from 'prop-types';
import { StatsContainer,StatsTitle,StatList, StatItem,StatItemLabel,StatItemPercent } from './Statistics.styled'



export const Statistics = ({title, stats}) => {
    return <StatsContainer>
        {title && (<StatsTitle>{title}</StatsTitle>)}

        <StatList>
            {stats.map(stat => (
              <StatItem key={stat.id}>
                  <StatItemLabel>{stat.label}</StatItemLabel>
                  <StatItemPercent>{stat.percentage}%</StatItemPercent>
                </StatItem>
            ))}
            
        </StatList>
    </StatsContainer>
}



Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }))
  
}

