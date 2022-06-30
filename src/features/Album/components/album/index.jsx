import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss'

Album.propTypes = {
    Album: PropTypes.array,
};
Album.defaultProps = {
    Album: {}
}

function Album({album}) {
    return (
        <div className="album">
            <div className="img">
                <img src={album.img} alt={album.title} />
            </div>
          <p>{album.title}</p>
        </div>
    );
}

export default Album;