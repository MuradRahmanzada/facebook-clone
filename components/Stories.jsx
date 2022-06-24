import React from "react";
import StoryCard from "./StoryCard";
const stories = [
  {
    name: "Elon Musk",
    src: "https://links.papareact.com/4zn",
    profile: "https://links.papareact.com/kxk",
    id: 1,
  },
  {
    name: "Cristiano Ronaldo",
    src: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https%3A%2F%2Ftherealchamps.com%2Fwp-content%2Fuploads%2Fgetty-images%2F2018%2F08%2F962792886.jpeg",
    profile:
      "https://scontent.fgyd4-2.fna.fbcdn.net/v/t1.6435-9/190108336_322648402555040_2100790391455013605_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=noUQZy_lPQUAX82Xzt5&tn=hFKkRbAyzG5loC1w&_nc_ht=scontent.fgyd4-2.fna&oh=00_AT8cKcxSP_DY0f7reMIAYzuIxnR62sJDinHdDQpwdrex7w&oe=62D89A00",
    id: 2,
  },
  {
    name: "Jeff Bezoz",
    src: "https://links.papareact.com/k2j",
    profile: "https://links.papareact.com/f0p",
    id: 3,
  },
  {
    name: "Mark Zuckerberg",
    src: "https://links.papareact.com/xql",
    profile: "https://links.papareact.com/snf",
    id: 4,
  },
  {
    name: "Bill Gates",
    src: "https://links.papareact.com/4u4",
    profile: "https://links.papareact.com/zvy",
    id: 5,
  },
];

const Stories = () => {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard
          key={story.id}
          name={story.name}
          src={story.src}
          profile={story.profile}
        />
      ))}
    </div>
  );
};

export default Stories;
