const Frutas = () => {
  const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Manga"];
  return (
    <div>
      {frutas.map((fruta) => (
        <p key={fruta}>{fruta}</p>
      ))}
    </div>
  );
};

export default Frutas;
