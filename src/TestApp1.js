import React from "react";

const foodLike = [
  {
    name: "apple",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxg63DW20_vFnSkVlzDy_bWHehUtSBOaP__g&usqp=CAU",
  },

  {
    name: "orange",
    image:
      "https://media.istockphoto.com/photos/orange-slice-picture-id1163872349?k=20&m=1163872349&s=612x612&w=0&h=1oVhcd6gYzgvDCVJVqJN_6mPUnHCd9uYQk5rZ3Il_9s=",
  },
];

function Food(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.image} />
    </div>
  );
}

function App() {
  return (
    <div>
      {foodLike.map((dish) => (
        <Food name={dish.name} image={dish.image} />
      ))}
    </div>
  );
}

export default App;
