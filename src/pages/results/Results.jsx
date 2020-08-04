import React, { useContext, useEffect, useState } from 'react';
import ImageTile from '../../components/ImageTile/ImageTile';
import './Results.scss';
import { AppContext } from '../../AppProvider';
import { getSortedList } from '../../utils/utils';

const Results = () => {
  const { shoesList=[] } = useContext(AppContext);
  const [itemList, setItemsList] = useState([]);

  useEffect(() => {
    getSortedList(shoesList, 'rating');

    setTimeout(() => setItemsList(shoesList), 1000);
  },[shoesList]);

  return (
    <div className="box_resultsPage box_appBody" data-testid="resultsPage">
      <div className="body_content">
        <div className="content_description">
          Congratulatons! Based on your selection we've following suggested
          products. Enjoy your free 30 day trial period
        </div>
        {itemList.length > 0 && (
          <ul className="tiles_listing" data-testid="tiles_listing">
            {itemList.map(({ name, imgPath }) => (
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
