import PropTypes from "prop-types";

const Card = ({ id, name, image, price, isstar, addToCart, removeFromCart, isCarted = false }) => {

    return (
        <div className="card" style={{ width: 250, height: 350 }}>
            <img src={image} className="card-img-top" alt={name}></img>
            <div className="card-body" style={{ width: 250, height: 200, padding:0 }}>
                <div className="card-body" style={{height:100}}>
                    <h5 className="card-title">{name}</h5>
                    {isstar && <div>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                        <span className="fa fa-star checked"></span>
                    </div>}
                    {price.nodash && price.isstriked && <div className="price"> <span style={{ textDecoration: "line-through" }}>{price.start}</span><span>{price.end}</span></div>}
                    {!price.nodash && <div className="price"><p>{price.start} - {price.end}</p></div>}
                    {price.nodash && !price.isstriked && <div className="price"><span>{price.start}</span><span>{price.end}</span></div>}
                    </div>
                <div className="card-body">
                {isCarted ? (
                    <button className="btn btn-outline-dark" onClick={() => removeFromCart(id)}>Remove from Cart</button>
                ) : (
                    <button className="btn btn-outline-dark" onClick={() => { addToCart({ id, name, image, isstar, addToCart, removeFromCart }) }
                    }>Add to cart</button>
                )
                }
                </div>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number.isRequired,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.shape({
        start: PropTypes.string,
        end: PropTypes.string,
        nodash: PropTypes.bool,
        isstriked: PropTypes.bool
    }),
    isstar: PropTypes.bool,
    addToCart: PropTypes.func,
    removeFromCart: PropTypes.func,
    isCarted: PropTypes.bool
};

export default Card