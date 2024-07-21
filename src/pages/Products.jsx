// import React, { useState } from 'react'
// import './CSS/Product.css'

// const Products = (props) => {
//     const {product} =  props 
//     const [item ,setItem] = useState('')
//     console.log(item);

//     return (
//         // <div >
//         //     {product.map((item, index) => {
//         //         return <div key={index}>
//         //             <h1>name:{item.product_name}</h1>
//         //             <img src={item.product.image_url} alt=''></img>
//         //             <p>{item.product.category}</p>
//         //             <p>{item.product.price}</p>
//         //         </div>
//         //     })}
//         // </div>
//         <div className="product-container">
//         {product.map((item, index) => (
//             <div className="product-card" key={index}>
//                 <h1 className="product-name">{item.product_name}</h1>
//                 <img src={item.image_url} alt={item.product_name} className="product-image" />
//                 <p className="product-category">{item.category}</p>
//                 <p className="product-price">${item.price.toFixed(2)}</p>
//                 <button onClick={(e)=>{setItem(item)}} >add</button>
//             </div>
//         ))}
//     </div>
//     )
// }

// export default Products






// import React, { useState } from 'react';
// import './CSS/Product.css';

// const Products = (props) => {
//     const { product } = props;
//     const [addedItems, setAddedItems] = useState([]);
    
//     const addItem = (item) => {
//         setAddedItems([...addedItems, item]);
//     };

//     return (
//         <div>
//             <div className="product-container">
//                 {product.map((item, index) => (
//                     <div className="product-card" key={index}>
//                         <h1 className="product-name">{item.product_name}</h1>
//                         <img src={item.image_url} alt={item.product_name} className="product-image" />
//                         <p className="product-category">{item.category}</p>
//                         <p className="product-price">${item.price.toFixed(2)}</p>
//                         <button onClick={() => addItem(item)}>Add</button>
//                     </div>
//                 ))}
//             </div>
//             <div className="added-items-container">
//                 <h2>Added Items</h2>
//                 {addedItems.length > 0 ? (
//                     <ul>
//                         {addedItems.map((item, index) => (
//                             <li key={index}>
//                                 {item.product_name} - ${item.price.toFixed(2)}
//                             </li>
//                         ))}
//                         <button>send to Whatsapp</button>
//                     </ul>
//                 ) : (
//                     <p>No items added yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Products;




// import React, { useState } from 'react';
// import './CSS/Product.css';
// import listimg from './images/list-product.png'

// const Products = (props) => {
//     const { product } = props;
//     const [addedItems, setAddedItems] = useState([]);
    
//     const addItem = (item) => {
//         setAddedItems([...addedItems, item]);
//     };

//     const sendToWhatsApp = () => {
//         const itemList = addedItems.map(item => `${item.product_name} - $${item.price.toFixed(2)}`).join('\n');
//         const message = `Here are the items I've added:\n\n${itemList}`;
//         const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
//         window.open(url, '_blank');
//     };

//     return (
//         <div>
//             <div className="product-container">
//                 {product.map((item, index) => (
//                     <div className="product-card" key={index}>
//                         <h1 className="product-name">{item.product_name}</h1>
//                         <img src={item.image_url} alt={item.product_name} className="product-image" />
//                         <p className="product-category">{item.category}</p>
//                         <p className="product-price">${item.price.toFixed(2)}</p>
//                         <button onClick={() => addItem(item)}>Add</button>
//                     </div>
//                 ))}
//             </div>
//             <div >0</div>
//             <img src={listimg} alt=''></img>
//             <div className="added-items-container">
//                 <h2>Added Items</h2>
//                 {addedItems.length > 0 ? (
//                     <div>
//                         <ul>
//                             {addedItems.map((item, index) => (
//                                 <li key={index}>
//                                     {item.product_name} - ${item.price.toFixed(2)}
//                                 </li>
//                             ))}
//                         </ul>
//                         <button onClick={sendToWhatsApp}>Send to WhatsApp</button>
//                     </div>
//                 ) : (
//                     <p>No items added yet.</p>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default Products;







import React, { useState } from 'react';
import './CSS/Product.css';
import listimg from './images/list-product.png';

const Products = (props) => {
    const { product } = props;
    const [addedItems, setAddedItems] = useState([]);
    const [showList, setShowList] = useState(false);

    const addItem = (item) => {
        setAddedItems([...addedItems, item]);
    };

    const toggleListVisibility = () => {
        setShowList(!showList);
    };

    const sendToWhatsApp = () => {
        const itemList = addedItems.map(item => `${item.product_name} - $${item.price.toFixed(2)}`).join('\n');
        const message = `Here are the items I've added:\n\n${itemList}`;
        const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    };

    return (
        <div>
             <div>
                <div onClick={toggleListVisibility} className='itemcount' >
                    <img src={listimg} alt='List Icon' style={{ width: '50px', height: '50px', position:'fixed' }} />
                    <div>{addedItems.length}</div>
                </div>
                {showList && (
                    <div className="added-items-container">
                        <h2>Added Items</h2>
                        {addedItems.length > 0 ? (
                            <div>
                                <ul>
                                    {addedItems.map((item, index) => (
                                        <li key={index}>
                                            {item.product_name} - ${item.price.toFixed(2)}
                                        </li>
                                    ))}
                                </ul>
                                <button onClick={sendToWhatsApp}>Send to WhatsApp</button>
                            </div>
                        ) : (
                            <p>No items added yet.</p>
                        )}
                    </div>
                )}
            </div>
            <div className="product-container">
                {product.map((item, index) => (
                    <div className="product-card" key={index}>
                        <h1 className="product-name">{item.product_name}</h1>
                        <img src={item.image_url} alt={item.product_name} className="product-image" />
                        <p className="product-category">{item.category}</p>
                        <p className="product-price">${item.price.toFixed(2)}</p>
                        <button onClick={() => addItem(item)}>Add</button>
                    </div>
                ))}
            </div>
           
        </div>
    );
};

export default Products;
