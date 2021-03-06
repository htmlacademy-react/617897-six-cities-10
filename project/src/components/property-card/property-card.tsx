import {Hotel} from '../../types/hotel.type';
import {InsideFeatures} from '../inside-features/inside-features';
import {PropertyHost} from '../property-host/property-host';

type Props = {
  hotel: Hotel;
};

export function PropertyCard({hotel}: Props): JSX.Element {
  const {bedrooms, description, goods, host, isPremium, maxAdults, price, rating, title, type} = hotel;

  return (
    <>
      {
        isPremium &&
        <div className="property__mark">
          <span>Premium</span>
        </div>
      }

      <div className="property__name-wrapper">
        <h1 className="property__name">
          {title}
        </h1>
        <button className="property__bookmark-button button" type="button">
          <svg className="property__bookmark-icon" width="31" height="33">
            <use xlinkHref="#icon-bookmark" />
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>

      <div className="property__rating rating">
        <div className="property__stars rating__stars">
          <span style={{width: '80%'}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
        <span className="property__rating-value rating__value">{rating}</span>
      </div>

      <ul className="property__features">
        <li className="property__feature property__feature--entire">
          {type}
        </li>
        <li className="property__feature property__feature--bedrooms">
          {bedrooms} Bedrooms
        </li>
        <li className="property__feature property__feature--adults">
          Max {maxAdults} adults
        </li>
      </ul>

      <div className="property__price">
        <b className="property__price-value">&euro;{price}</b>
        <span className="property__price-text">&nbsp;night</span>
      </div>

      <InsideFeatures features={goods} />

      <PropertyHost
        host={host}
        description={description}
      />
    </>
  );
}
