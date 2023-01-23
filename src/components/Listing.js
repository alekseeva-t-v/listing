function Listing({items}) {

  const item_list = items.map((item) => 
    (
    <div className="item" key={item.listing_id}>
        <div className="item-image">
          <a href={item.url}>
            <img src={item.MainImage.url_570xN} alt={item.title}/>
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">{(item.title <= 50) ? item.title : item.title.substring(0, 50) + '...'}</p>
          <p className="item-price">{(item.currency_code === 'USD') ? '$' + item.price : (item.currency_code === 'EUR') ?'€' + item.price : item.price + ' ' + item.currency_code}</p>
          <p className={(item.quantity <= 10) ? "item-quantity level-low" : (item.quantity <= 20) ? "item-quantity level-medium" : "item-quantity level-high"}>{item.quantity} left</p>
        </div>
    </div>
    )
  )

  return (
    <div className="item-list">
      {item_list}
    </div>
  )
}

Listing.defaultProps = {
  items: [],
};

export default Listing;
