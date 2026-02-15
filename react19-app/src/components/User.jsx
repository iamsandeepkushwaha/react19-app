// function User(props) {
//   return (
//     <h2>
//       Name: {props.name}, Age: {props.age}
//     </h2>
//   );
// }

// Props Destructuring (Clean Code ✨)
// Same cheez, better style 👇
function User({ name, age }) {
  return <h2>{name} - {age}</h2>;
}

export default User;
