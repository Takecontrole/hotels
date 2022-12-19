import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({ item }) => {
  return (
    <div className="searchItem">
      <img src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.distance} метров от центра</span>
        <span className="siTaxiOp">Бесспоатное такси из аэропорта</span>
        <span className="siSubtitle">
          С кондиционероми воздуха.
        </span>
        <span className="siFeatures">{item.desc}</span>
        <span className="siCancelOp">Бесплатная отмена бронирования</span>
        <span className="siCancelOpSubtitle">
          Оформите сейчас, а если вы передумаете то сможете отменить бронь!
        </span>
      </div>
      <div className="siDetails">
        {item.rating && <div className="siRating">
          <span>Великолепно</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
          <span className="siPrice">${item.cheapestPrice}</span>
          <span className="siTaxOp">Включая налоги и сборы</span>
          <Link to={`/hotels/${item._id}`}>
          <button className="siCheckButton">Посмотреть доступность</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
