import { useContext } from "react";
import { BioContext } from "../ContextAPI";

export default function Home() {
  const bio = useContext(BioContext);
  if (!bio) {
    return <div>Loading...</div>;
  }
  const { name, age } = bio;

  return (
    <>
      <p style={{ fontWeight: "bold", fontSize: "24px","margin":"0px", }}>Hello Context API</p>
      <p>
        My Name is <strong>{name}</strong>. I am <strong>{age}</strong> years old{" "}
      </p>
    </>
  );
}
