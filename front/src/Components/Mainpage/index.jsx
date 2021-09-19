import React, { useState } from "react";
import "./index.css";
import ResourceCards from "../ResourceCards";
import Navigation from "../Navigation";
import Bottom from "../Bottom";

const data = [
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 1,
  },
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 2,
  },
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 3,
  },
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 4,
  },
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 5,
  },
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 6,
  },
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 7,
  },
  {
    game: "halo",
    description: "this game is a fantastic game",
    author: "this is the author",
    genre: "this is the genre",
    details: "Details???",
    _id: 8,
  },
];

const Index = () => {
  const [resourceCards, setResourceCards] = useState(data);
  console.log(resourceCards);

  return (
    <div>
      <Navigation />
      <div className="main">
        <div className="left-section">
          <div className="popular">Popular Tags</div>
          <div className="browse">Browse</div>
          <div className="games-by-price">Games By Price</div>
        </div>

        <div className="browse-box">
          <h1 className="browse-title">Featured Games</h1>

          <div id="all-images">
            {data &&
              data.map(
                (dataItem) => (
                  <ResourceCards
                    game={dataItem.game}
                    description={dataItem.description}
                    author={dataItem.author}
                  />
                )
                // <tr key={data.id}>
                //     <td>{data.firstName} {data.lastName}</td>
                //     <td>{data.email}</td>
                //     <td>{user.role}</td>
                // </tr>
              )}
          </div>
          <Bottom />
        </div>
      </div>
    </div>
  );
};

export default Index;
