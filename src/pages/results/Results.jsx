import React, { useEffect, useState } from 'react';
import ImageTile from '../../components/ImageTile/ImageTile';
import './Results.scss';
import { getShoesList } from '../../utils/dataUtils';

const Results = () => {
  const [shoesList, setShoesList] = useState([]);

  useEffect(() => {
    const list = getShoesList();

    list.sort((a, b) => b['rating'] - a['rating']);

    setTimeout(() => setShoesList(list), 1000);
  });

  return (
    <div className="box_resultsPage box_appBody" data-testid="resultsPage">
      <div className="body_content">
        <div className="content_description">
          Congratulatons! Based on your selection we've following suggested
          products. Enjoy your free 30 day trial period
        </div>
        {shoesList.length > 0 && (
          <ul className="tiles_listing" data-testid="tiles_listing">
            {shoesList.map(({ name, id, imgPath }) => (
              <li key={name}>
                <ImageTile name={name} imgPath={imgPath} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Results;
