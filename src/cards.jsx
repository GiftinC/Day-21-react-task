import Card from "./card";
import { useState } from "react";
import './cards.css';

const list = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Fancy Product",
        price: {
            start: "$40.00",
            end: "$80.00",
            nodash: false,
            isstriked: false
        },
        isstar: false
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Special Item",
        price: {
            start: "$20.00",
            end: "$18.00",
            nodash: true,
            isstriked: true
        },
        isstar: true
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Sale Item",
        price: {
            start: "$50.00",
            end: "$25.00",
            nodash: true,
            isstriked: true
        },
        isstar: false
    },
    {
        id: 4,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Popular Item",
        price: {
            start: "$40.00",
            nodash: true,
            isstriked: false
        },
        isstar: true
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Sale Item",
        price: {
            start: "$50.00",
            end: "$25.00",
            nodash: true,
            isstriked: true
        },
        isstar: false
    },
    {
        id: 6,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Fancy Product",
        price: {
            start: "$120.00",
            end: "$280.00",
            nodash: false,
            isstriked: false
        },
        isstar: false

    },
    {
        id: 7,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Special Item",
        price: {
            start: "$20.00",
            end: "$18.00",
            nodash: true,
            isstriked: true
        },
        isstar: true
    },
    {
        id: 8,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Popular Item",
        price: {
            start: "$40.00",
            nodash: true,
            isstriked: false
        },
        isstar: true
    }
]
const Cards = () => {
    const [carted, setCarted] = useState([]);
    const handleAddCart = (carts) => {
        const temp = [...carted, carts]
        setCarted(temp);
    }

    const handleRemoveCart = (cartsId) => {
        const temp = carted.filter((c) => c.id !== cartsId);
        setCarted(temp);
    }
    console.log(carted);
    return (
        <>
            <nav className="nav">
                <div className="navbar">
                    <div>
                        <a className="navbar-brand">Start Bootstrap</a>
                        <a href="http://">Home</a>
                        <a href="http://">About</a>
                        <a href="http://">Shop</a>
                    </div>
                    <div style={{ marginRight: 50 }}>
                        <button className="btn btn-outline-dark cart" type="submit">
                            <i className="fa fa-shopping-cart" style={{ fontSize: 18, margin: 5 }}></i>
                            Cart<span className="badge rounded-pill bg-dark" style={{ margin: 5 }}>{carted.length}</span></button>
                    </div>
                </div>
            </nav>
            <header>
                <div className="header">
                    <h1>Shop in Style</h1>
                    <h6>With this Shop Homepage template</h6>
                </div>
            </header>
            <div className="container">
                <div className="row">
                    <div className="cards">
                        {list.map((data) => (
                            <Card
                                id={data.id}
                                key={data.id}
                                image={data.image}
                                name={data.name}
                                price={data.price}
                                isstar={data.isstar}
                                addToCart={handleAddCart}
                                removeFromCart={handleRemoveCart}
                                isCarted={Boolean(carted.find((f) => f.id === data.id))}
                            />
                        ))

                        }
                    </div>
                </div>
            </div>
            <footer>
                <div className="footer">
                    <h6>Copyright &copy; your website 2023</h6>
                </div>
            </footer>

        </>
    )
}

export default Cards