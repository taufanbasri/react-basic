import React from "react";
import Person from "./Person";

const NameList = () => {
  const persons = [
    {
      id: 1,
      name: "Taufan",
      age: 30,
      skill: "React",
    },
    {
      id: 2,
      name: "Evita",
      age: 30,
      skill: "Vue",
    },
    {
      id: 3,
      name: "Nada",
      age: 3,
      skill: "Angular",
    },
    {
      id: 4,
      name: "Lubna",
      age: 1,
      skill: "Svelte",
    },
  ];

  const personList = persons.map((person) => (
    <Person person={person} key={person.id} />
  ));

  return <div>{personList}</div>;
};

export default NameList;
