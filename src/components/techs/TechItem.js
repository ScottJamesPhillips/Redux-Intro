import React from 'react'
import propTypes from 'prop-types'

const TechItem = ({tech}) => {
  return (
    <li className="collection-item">
      <div>
        {tech.firstName} {tech.lastName} 
        <a href="#!" className="secondary-content">
            <i className="material-icons grey-text">delete</i></a>
      </div>
    </li>
  )
}

TechItem.propTypes = {
    tech: propTypes.object.isRequired,
  };

export default TechItem
