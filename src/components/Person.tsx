import * as React from 'react';
import { FC, useState, useEffect, ChangeEvent } from 'react';

interface Props {
  name: string,
  email: string,
  hairColor: HairColor
}

export enum HairColor {
    Blonde = "Your hair is blonde!",
    Brown = "Noicee color!",
    Black = "Wow!"

}
export const Person: FC<Props> = ({name, email}) => {

const [country, setCountry] = useState<String|null|number|boolean>("")

//function for setting the country
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
    setCountry(e.target.value)
}
  return (
    <div>
      <h1>{name}</h1>
      <h2>{email}</h2>
      <input placeholder='Write down your country name: ' onChange={handleChange}/>
      {country}
      {HairColor.Brown}
    </div>
  );
}