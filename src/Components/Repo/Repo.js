import React from 'react'
import PropTypes from 'prop-types';

const Repo = ({repo}) => {
    return (
        <li className="collection-item">
            <a href={repo.html_url}>{repo.name}</a>
        </li>
    )
}

Repo.propTypes = {
    repo: PropTypes.object.isRequired,
}

export default Repo
