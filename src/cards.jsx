import Card from "./card";
import { useState } from "react";
import './cards.css';

const list = [
    {
        id: 1,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Fancy Product",
        price: {
            start: "$40.00" ,
            end: "$80.00",
            nodash: false,
            isstriked : false
        },
isstar: false
    },
    {
        id: 2,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Special Item",
        price: {
                start: "$20.00" ,
                end: "$18.00",
                nodash: true,
                isstriked : true
        },
        isstar: true
    },
    {
        id: 3,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Sale Item",
        price: {
            start: "$50.00" ,
            end: "$25.00",
            nodash: true,
            isstriked : true
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
            isstriked : false
        },
        isstar: true
    },
    {
        id: 5,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Sale Item",
        price: {
            start: "$50.00" ,
            end: "$25.00",
            nodash: true,
            isstriked : true
        },
        isstar: false
    },
    {
        id: 6,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Fancy Product",
        price: {
            start: "$120.00" ,
            end: "$280.00",
            nodash: false,
            isstriked : false
        },
        isstar: false

    },
    {
        id: 7,
        image: "https://img.freepik.com/free-photo/teacher-doing-english-lesson-online-his-students_23-2148963017.jpg",
        name: "Special Item",
        price: {
            start: "$20.00" ,
            end: "$18.00",
            nodash: true,
            isstriked : true
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
                isstriked : false
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
            <header>
                <button className="btn btn-outline-dark" type="submit" style={{ padding: 5 }}>
                    <i className="fa fa-shopping-cart" style={{ fontSize: 24, margin: 5 }}></i>
                    Cart<span className="badge rounded-pill bg-dark" style={{ margin: 5 }}>{carted.length}</span></button>
            </header>
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
        </>
    )
}

export default Cards