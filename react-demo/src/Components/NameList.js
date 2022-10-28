export const NameList = () => {
  const names = ["bruce", "clark", "diana"];
  return (
    <div>
      {names.map((name) => {
        return (
          <ul>
            <li key={name}>{name}</li>
          </ul>
        );
      })}
    </div>
  );
};
