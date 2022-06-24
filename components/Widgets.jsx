import React from "react";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";
const contacts = [
  {
    src: "https://links.papareact.com/f0p",
    name: "Jeff Bezos",
    id: 1
  },
  {
    src: "https://links.papareact.com/kxk",
    name: "Elon Musk",
    id: 2
  },
  {
    src: "https://links.papareact.com/zvy",
    name: "Bill Gates",
    id: 3
  },
  {
    src: "https://links.papareact.com/snf",
    name: "Mark Zuckerberg",
    id: 4
  },
  {
    src: "https://links.papareact.com/d0c",
    name: "Harry Potter",
    id: 5
  },
  {
    src: "https://links.papareact.com/6gg",
    name: "The Queen",
    id: 6
  },
  {
    src: "https://links.papareact.com/r57",
    name: "James Bond",
    id: 7
  },
];
const Widgets = () => {
  return <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
    <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
            <VideoCameraIcon className="h-6"/>
            <SearchIcon className="h-6"/>
            <DotsHorizontalIcon className="h-6"/>
        </div>
    </div>

    {contacts.map(contact => (
        <Contact key={contact.id} src={contact.src} name={contact.name}/>
    ))}
  </div>;
};

export default Widgets;
