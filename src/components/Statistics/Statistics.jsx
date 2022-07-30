
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


// <section class="statistics">
//   <h2 class="title">Upload stats</h2>

//   <ul class="stat-list">
//     <li class="item">
//       <span class="label">.docx</span>
//       <span class="percentage">4%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp3</span>
//       <span class="percentage">14%</span>
//     </li>
//     <li class="item">
//       <span class="label">.pdf</span>
//       <span class="percentage">41%</span>
//     </li>
//     <li class="item">
//       <span class="label">.mp4</span>
//       <span class="percentage">12%</span>
//     </li>
//   </ul>
// </sectio