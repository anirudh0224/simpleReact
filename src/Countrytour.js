import React, { useState } from 'react';
// import './RestaurantBillingSystem.css';

const Countrytour = () => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const menuItems = [
    {
      name: 'Burger',
      price: 150,
      description: 'A hamburger, or simply a burger, is a dish consisting of fillings—usually a patty of ground meat, typically beef—placed inside a sliced bun or bread roll.',
      imgSrc: 'https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png'
    },
    {
      name: 'Pizza',
      price: 499,
      description: 'Pizza marinara, also known as pizza alla marinara, is a style of pizza in Neapolitan cuisine seasoned with only tomato sauce, extra virgin olive oil, oregano and garlic.',
      imgSrc: 'https://www.southernliving.com/thmb/3x3cJaiOvQ8-3YxtMQX0vvh1hQw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/2652401_QFSSL_SupremePizza_00072-d910a935ba7d448e8c7545a963ed7101.jpg'
    },
    {
      name: 'Sandwich',
      price: 49,
      description: 'Sandwiches are a popular type of lunch food, taken to work, school, or picnics to be eaten as part of a packed lunch.',
      imgSrc: 'https://img.freepik.com/free-photo/grilled-sandwich-with-bacon-fried-egg-tomato-lettuce-served-wooden-cutting-board_1150-42571.jpg'
    },
    {
      name: 'Milkshake',
      price: 199,
      description: 'Milkshake contains ice cream unlike milk smoothie. It is usually prepared by milk, ice cream or iced milk, emulsifier and/or stabilizer, and flavorings or sweeteners.',
      imgSrc: 'https://img.freepik.com/free-photo/sweet-summer-milkshake-wood-table-background-generative-ai_188544-12118.jpg'
    },
    {
      name: 'Muffin',
      price: 249,
      description: 'Muffins may have solid items mixed into the batter, such as berries, chocolate chips or nuts.',
      imgSrc: 'https://preppykitchen.com/wp-content/uploads/2023/10/Blueberry-Muffins-Recipe-Card.jpg'
    },
    {
      name: 'Noodles',
      price: 79,
      description: 'Noodles are a staple food in many cultures and made into a variety of shapes.',
      imgSrc: 'https://www.nestleprofessional.in/sites/default/files/2021-08/Hakka-Noodles.jpg'
    },
    {
      name: 'Cake',
      price: 799,
      description: 'Cakes are distinguished from breads in that they are usually sweet, with many other ingredients besides flour.',
      imgSrc: 'https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg'
    },
    {
      name: 'Sweets',
      price: 1099,
      description: 'Mithai (sweets) are the confectionery and desserts of the Indian subcontinent. Thousands of dedicated shops sell nothing but sweets.',
      imgSrc: 'https://media.istockphoto.com/id/1054228718/photo/indian-sweets-in-a-plate-includes-gulab-jamun-rasgulla-kaju-katli-morichoor-bundi-laddu.jpg?s=612x612&w=0&k=20&c=hYWCXLaldKvhxdBa83M0RnUij7BCmhf-ywWdvyIXR40='
    }
  ];

  const handleCheckboxChange = (item) => {
    const isSelected = selectedItems.find(selectedItem => selectedItem.name === item.name);

    if (isSelected) {
      setSelectedItems(selectedItems.filter(selectedItem => selectedItem.name !== item.name));
      setTotalPrice(totalPrice - item.price);
    } else {
      setSelectedItems([...selectedItems, item]);
      setTotalPrice(totalPrice + item.price);
    }
  };

  const removeItem = (item) => {
    setSelectedItems(selectedItems.filter(selectedItem => selectedItem.name !== item.name));
    setTotalPrice(totalPrice - item.price);
  };

  return (
    <div>
      <table align="center" width="100%" border="1" cellPadding="10px">
        <thead>
          <tr>
            <th colSpan="5" className="headingMain">Hotel Menu</th>
          </tr>
          <tr className="prdhead">
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Add</th>
          </tr>
        </thead>
        <tbody>
          {menuItems.map((item, index) => (
            <tr key={index} align="center">
              <td><img src={item.imgSrc} width="100px" height="100px" alt={item.name} /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.some(selectedItem => selectedItem.name === item.name)}
                  onChange={() => handleCheckboxChange(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <table align="center" width="100%" border="1%" cellPadding="10px">
        <thead>
          <tr>
            <th colSpan="5" className="headingMain">Your Bill</th>
          </tr>
          <tr className="prdhead">
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Product Description</th>
            <th>Product Remove</th>
          </tr>
        </thead>
        <tbody>
          {selectedItems.map((item, index) => (
            <tr key={index} align="center">
              <td><img src={item.imgSrc} width="100px" height="100px" alt={item.name} /></td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => removeItem(item)}>Remove</button>
              </td>
            </tr>
          ))}
          <tr align="center">
            <td colSpan="3" id="total-price">{totalPrice}</td>
            <td colSpan="2">Total Bill</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Countrytour;

