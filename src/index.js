import React from "react";
import ReactDOM from "react-dom";

function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt="avatar_img" />
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <div>
    <h1>My Contacts</h1>
    <Card
      name="Beyonce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      tel="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Spiderman"
      img="https://i.pinimg.com/236x/3b/01/d8/3b01d8f7c2de09ff3f1b86ed5ac1d693.jpg"
      tel="555-super-spider"
      email="spiderman@marvel.com"
    />
    <Card
      name="Jay Pritchett"
      img="http://www.usanetwork.com/sites/usanetwork/files/styles/300x250/public/modernfamily_gallery_jay-1.jpg?itok=k6z_oTe5"
      tel="+1 415 555 5555"
      email="jp@modernfamily.com"
    />
  </div>,
  document.getElementById("root")
);
