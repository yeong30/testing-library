export default function ToppingOption({ name, imagePath }) {
  return (
    <div>
      <span>{name}</span>
      <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </div>
  );
}
