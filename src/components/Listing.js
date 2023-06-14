
/**
 * Компонент отвечающий за отображение блока карточек товаров
 *
 * @param {object} props.items массив обектов с характеристиками товаров
 */
function Listing(props) {
  const { items } = props;

  const item_list = items.map((item) => {

    let currencyCode;
    let className;

    if (item.currency_code === 'USD') {
      currencyCode = '$' + item.price;
    } else if (item.currency_code === 'EUR') {
      currencyCode = '€' + item.price;
    } else {
      currencyCode = item.price + ' ' + item.currency_code;
    }

    if (item.quantity <= 10) {
      className = 'item-quantity level-low'
    } else if (item.quantity <= 20) {
      className = 'item-quantity level-medium'
    } else {
      className = 'item-quantity level-high'
    }

    const itemTitle =
      item.title <= 50 ? item.title : item.title.substring(0, 50) + '...';

    return (
      <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt={item.title} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">
            {itemTitle}
          </p>
          <p className="item-price">{currencyCode}</p>
          <p
            className={className}
          >
            {item.quantity} left
          </p>
        </div>
      </div>
    );
  });

  return <div className="item-list">{item_list}</div>;
}

Listing.defaultProps = {
  items: [],
};

export default Listing;
