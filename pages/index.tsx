import { useQuery } from "@apollo/client";
import { POSTS } from "@lib/tags";

import Feed from "@components/Feed";

const posts = [
  {
    __typename: "Post",
    id: "26MapYKUuqxLaWaBomQy",
    image: "https://img.dummyapi.io/photo-1569796922509-d2846284929e.jpg",
    likes: 29,
    link: null,
    publishDate:
      "Sun May 17 2020 16:08:18 GMT+0000 (Coordinated Universal Time)",
    tags: ["grey", "pet", "mammal"],
    text: "close-up photo of white English Bulldog",
    owner: {
      __typename: "User",
      id: "UeUhMW6zgrXNdxoyLXYn",
      title: "mr",
      firstName: "James",
      lastName: "Black",
      email: "james.black@example.com",
      picture: "https://randomuser.me/api/portraits/men/29.jpg",
    },
  },
  {
    __typename: "Post",
    id: "aEuMbkc5eVeEdIsmjDmX",
    image: "https://img.dummyapi.io/photo-1548658166-136d9f6a7e76.jpg",
    likes: 501,
    link: "https://www.danlincoln.com",
    publishDate:
      "Sun May 17 2020 10:43:24 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "animal", "canine"],
    text: "yawning white and brown short coated puppy",
    owner: {
      __typename: "User",
      id: "fKRsOY17DxmTa6klEIKn",
      title: "mr",
      firstName: "Nikolaj",
      lastName: "Larsen",
      email: "nikolaj.larsen@example.com",
      picture: "https://randomuser.me/api/portraits/men/22.jpg",
    },
  },
  {
    __typename: "Post",
    id: "MD6dCY0BlMVU7MQBj8Ts",
    image: "https://img.dummyapi.io/photo-1583336663277-620dc1996580.jpg",
    likes: 16,
    link: null,
    publishDate:
      "Sun May 17 2020 04:54:41 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "animal", "bulldog"],
    text:
      "Hypebeasts brown and white dog wearing pink and black polka dot dress",
    owner: {
      __typename: "User",
      id: "a9IzuhtufH0GNRAyHCoT",
      title: "mrs",
      firstName: "Karoline",
      lastName: "Sviggum",
      email: "karoline.sviggum@example.com",
      picture: "https://randomuser.me/api/portraits/women/61.jpg",
    },
  },
  {
    __typename: "Post",
    id: "vinxDgB5uACfBB4WR6w5",
    image: "https://img.dummyapi.io/photo-1477973770766-6228305816df.jpg",
    likes: 462,
    link: "http://www.mutedtone.com",
    publishDate:
      "Sat May 16 2020 17:50:31 GMT+0000 (Coordinated Universal Time)",
    tags: ["animal", "dog", "pet"],
    text: "short-coated gray dog near green leafed plants",
    owner: {
      __typename: "User",
      id: "fEq8zN3WCYwcp8eXEzlo",
      title: "mr",
      firstName: "Siem",
      lastName: "Marcelissen",
      email: "siem.marcelissen@example.com",
      picture: "https://randomuser.me/api/portraits/men/38.jpg",
    },
  },
  {
    __typename: "Post",
    id: "fnGvtsQHvtB2OeoS5BVF",
    image: "https://img.dummyapi.io/photo-1547480643-88ac656b7cfc.jpg",
    likes: 21,
    link: "https://www.instagram.com/jcgellidon/",
    publishDate:
      "Sat May 16 2020 07:29:53 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "animal", "nature"],
    text: "dog prawn laying on concrete outside during daytime",
    owner: {
      __typename: "User",
      id: "7DbXNPWlNDR4QYVvFZjr",
      title: "mr",
      firstName: "Evan",
      lastName: "Carlson",
      email: "evan.carlson@example.com",
      picture: "https://randomuser.me/api/portraits/men/80.jpg",
    },
  },
  {
    __typename: "Post",
    id: "vkR2CtwcF49xFgr8kKx3",
    image: "https://img.dummyapi.io/photo-1527973025938-d60fdcbc9ece.jpg",
    likes: 35,
    link: null,
    publishDate:
      "Sat May 16 2020 04:29:33 GMT+0000 (Coordinated Universal Time)",
    tags: ["beach", "coast", "portugal"],
    text: "A Walk in the Beach two black and tan dog on beach",
    owner: {
      __typename: "User",
      id: "nVFM8iffOPKKeBTkBgXa",
      title: "mrs",
      firstName: "Anaëlle",
      lastName: "Dumas",
      email: "anaelle.dumas@example.com",
      picture: "https://randomuser.me/api/portraits/women/25.jpg",
    },
  },
  {
    __typename: "Post",
    id: "PCTI6cyhd3y5q1Z0YlmA",
    image: "https://img.dummyapi.io/photo-1579178460072-07b6cebedf5f.jpg",
    likes: 22,
    link: null,
    publishDate:
      "Sat May 16 2020 02:42:34 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "canine", "animal"],
    text: "Alaskan Malamute black and white wolf",
    owner: {
      __typename: "User",
      id: "6wy6UNkZueJfIUfq88d5",
      title: "miss",
      firstName: "Melanie",
      lastName: "Pilz",
      email: "melanie.pilz@example.com",
      picture: "https://randomuser.me/api/portraits/women/32.jpg",
    },
  },
  {
    __typename: "Post",
    id: "eTRWL9rlPZyHeKzW050T",
    image: "https://img.dummyapi.io/photo-1590178534645-de019aa7255e.jpg",
    likes: 0,
    link: "https://adnanpuzic.com/",
    publishDate:
      "Sat May 16 2020 02:17:38 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "animal", "canine"],
    text:
      "Two dogs playing on the grass with a plastic bottle. brown and black short coated dog on green grass field during daytime",
    owner: {
      __typename: "User",
      id: "FLgxIsydJ28gBIIKZeMg",
      title: "ms",
      firstName: "Annabel",
      lastName: "Somby",
      email: "annabel.somby@example.com",
      picture: "https://randomuser.me/api/portraits/women/35.jpg",
    },
  },
  {
    __typename: "Post",
    id: "mM1l2uFUCvWHP1pFvsgu",
    image: "https://img.dummyapi.io/photo-1550206574-96bbd259b685.jpg",
    likes: 76,
    link: "http://jaredmurrayphotos.com",
    publishDate:
      "Fri May 15 2020 06:42:12 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "animal", "pitbull"],
    text:
      "This is Ruby. I heard somewhere that dogs get a substantial boost in seratonin when they look at their owners for long periods of time. brown dog",
    owner: {
      __typename: "User",
      id: "u2EZB3b8Zdt7XblIViuD",
      title: "miss",
      firstName: "Edita",
      lastName: "Vestering",
      email: "edita.vestering@example.com",
      picture: "https://randomuser.me/api/portraits/women/89.jpg",
    },
  },
  {
    __typename: "Post",
    id: "uK53KWJuVzBdZgLtlTn2",
    image: "https://img.dummyapi.io/photo-1524675772159-ea8ff66a947d.jpg",
    likes: 64,
    link: null,
    publishDate:
      "Fri May 15 2020 04:11:48 GMT+0000 (Coordinated Universal Time)",
    tags: ["sled", "dogsled", "sweden"],
    text:
      "I took this photo during my trip in Swedish Lapland . An adventure on a dogsledge through the beautiful Swedish nature photo of dogs with leash",
    owner: {
      __typename: "User",
      id: "7DbXNPWlNDR4QYVvFZjr",
      title: "mr",
      firstName: "Evan",
      lastName: "Carlson",
      email: "evan.carlson@example.com",
      picture: "https://randomuser.me/api/portraits/men/80.jpg",
    },
  },
  {
    __typename: "Post",
    id: "SpfH9f9E7o1jdWaUpsLG",
    image: "https://img.dummyapi.io/photo-1589469526983-0887ebe10072.jpg",
    likes: 2,
    link: "http://aleksmarinkovic.com",
    publishDate:
      "Thu May 14 2020 16:28:10 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "water", "pool"],
    text:
      "Cooling off in the fountain white and black short coated dog in water fountain during daytime",
    owner: {
      __typename: "User",
      id: "uQrnqsqyh8FjSXAPc7oA",
      title: "mrs",
      firstName: "Emilie",
      lastName: "Lambert",
      email: "emilie.lambert@example.com",
      picture: "https://randomuser.me/api/portraits/women/93.jpg",
    },
  },
  {
    __typename: "Post",
    id: "usUyceiAA53WZAgIyEhx",
    image: "https://img.dummyapi.io/photo-1587463272361-565200f82b33.jpg",
    likes: 149,
    link: "http://www.connorhome.com",
    publishDate:
      "Thu May 14 2020 14:53:11 GMT+0000 (Coordinated Universal Time)",
    tags: ["animal", "canine", "dog"],
    text:
      "Millie, the Cocker Spaniel self-isolating during the Coronavirus outbreak. brown long coated small dog lying on white textile",
    owner: {
      __typename: "User",
      id: "XTKfPcNzYYAp7cqaPXAG",
      title: "mr",
      firstName: "Benjamin",
      lastName: "Wilson",
      email: "benjamin.wilson@example.com",
      picture: "https://randomuser.me/api/portraits/men/14.jpg",
    },
  },
  {
    __typename: "Post",
    id: "uW21Ej7rXjp7uC7RJ7iA",
    image: "https://img.dummyapi.io/photo-1556955163-2ba8c049db4a.jpg",
    likes: 33,
    link:
      "https://www.viewbug.com/member/stephenleonardi#/stephenleonardi/gallery?sort=mostview",
    publishDate:
      "Thu May 14 2020 14:41:35 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "animal", "pet"],
    text: "adult long-coated white and black dog",
    owner: {
      __typename: "User",
      id: "INvhEPgK32WtuD4ejysK",
      title: "mr",
      firstName: "Konsta",
      lastName: "Manninen",
      email: "konsta.manninen@example.com",
      picture: "https://randomuser.me/api/portraits/men/24.jpg",
    },
  },
  {
    __typename: "Post",
    id: "PPkpo3iVNwsE7JxborH7",
    image: "https://img.dummyapi.io/photo-1570944191904-4b0be46fe39a.jpg",
    likes: 13,
    link: null,
    publishDate:
      "Thu May 14 2020 11:53:02 GMT+0000 (Coordinated Universal Time)",
    tags: ["dog", "animal", "canine"],
    text:
      "Border Collie Pup 6 weeks old has one blue eye. Southland New Zealand shallow focus photo of long-coated black and white puppy",
    owner: {
      __typename: "User",
      id: "k4XjnmBn5wFcptiDDDmo",
      title: "mr",
      firstName: "Mads",
      lastName: "Andersen",
      email: "mads.andersen@example.com",
      picture: "https://randomuser.me/api/portraits/men/74.jpg",
    },
  },
];

const Home = () => {
  // const { data, loading } = useQuery(POSTS, {
  //   variables: { page: 9, limit: 25 },
  // });

  // if (loading) {
  //   return <div>loading</div>;
  // }

  // return <div>{data && JSON.stringify(data.posts.data, null, 2)}</div>;
  return (
    <div className="grid grid-cols-4">
      <aside className="sticky h-screen top-20">Left</aside>
      <div className="col-span-2">
        <Feed posts={posts} />
      </div>
      <aside className="sticky h-screen top-20">Right</aside>
    </div>
  );
};

export default Home;
