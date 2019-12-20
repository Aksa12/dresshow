import React from 'react';
import style from './style/items.module.css';
const Items = ({ items, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
 for (let m=0;m<items.length;m++)
      console.log("id:"+items[m].id+" brand:"+items[m].brand)
  
  return (
      <div>
       <div className="row container">
      {items.map(item=>(
        <div className="col s6 m6 l4" key={items.id}>
          <div className={style.item+" card-action hoverable"}><a href={item.link} target="_blank"><div className="card">
            <div className="card-image">
              <img src={item.img} width="400px" height="600px" />
              <span className={style.itemname + " card-title valign-wrapper"} >{item.name}</span>
            </div>
            <div className={style.itemprice+" card-content"}>
              PKR {item.price}
            </div>
            <div className={style.itembrand + " card-content"}>
              {item.brand}
            </div>
          </div></a>
            </div>
        </div>
     ))}</div>
     </div>
  );
};

export default Items;