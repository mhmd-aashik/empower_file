interface navProps {
  label: string;
  route: string;
}

export const headerLinks: navProps[] = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Events",
    route: "/events",
  },
  {
    label: "Create Event",
    route: "/events/create",
  },
  {
    label: "My Profile",
    route: "/profile",
  },
  {
    label: "About",
    route: "/about",
  },
];



export const eventDefaultValues = {
  title: "",
  description: "",
  location: "",
  imageUrl: "",
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: "",
  price: "",
  isFree: false,
  skills: "",
};

interface Review {
  id: number;
  name: string;
  image: string;
  review: string;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "Kamal Perera",
    image:
      "https://media.licdn.com/dms/image/C5603AQEYirprb0qX_g/profile-displayphoto-shrink_800_800/0/1616590483499?e=2147483647&v=beta&t=0zjHss2h6T-YuDMhH3cAlpk35rQpd1JjzikZvcqplDA",
    review:
      "Step by step guidance is provided for every stage for all volunteering programs.",
  },
  {
    id: 2,
    name: "Samantha Silva",
    image:
      "https://i.pinimg.com/736x/d8/49/3a/d8493ac925b717b4da02f545f7e99004.jpg",
    review:
      "Program coordinators were helpful when booking these programs, really friendly, understanding and patient.",
  },
  {
    id: 3,
    name: "Nadeesha Fernando",
    image:
      "https://media.licdn.com/dms/image/D5603AQGJ9i4nRbCaXQ/profile-displayphoto-shrink_800_800/0/1664270306112?e=2147483647&v=beta&t=jp4ICLTA2SSV7JtAKwfg5dlfPjzPaetWhpbKZNX4GUg",
    review:
      "I made so many awesome memories there and I got to meet the loveliest people. Everyone was super welcoming and open.",
  },
  {
    id: 4,
    name: "Roshan Bandara",
    image:
      "https://thumbs.dreamstime.com/b/male-portrait-headshot-looking-to-camera-image-looks-great-black-white-too-36151720.jpg",
    review:
      "- It was very interesting to work on different programs. Overall, the experience is really good.",
  },
  {
    id: 5,
    name: "Dilani Rathnayake",
    image:
      "https://media.licdn.com/dms/image/D4D03AQGH3XT5L8LAWg/profile-displayphoto-shrink_800_800/0/1665684400265?e=2147483647&v=beta&t=Se4VJbzVpciB7hJRbTuURhiYkUcWtbgHPmXoqVlfQ8Y",
    review:
      "I had so many opportunities to explore countries and learn something about the culture.",
  },
  {
    id: 6,
    name: "Chaminda Perera",
    image:
      "https://media.licdn.com/dms/image/D5603AQHW3SyZzg26uw/profile-displayphoto-shrink_800_800/0/1708596689621?e=2147483647&v=beta&t=-xmMlNVwLcyLH_YfFkhpfk2pXxRlO0EPJWIBL3XO4H4",
    review:
      "you easily meet new friends who you can hang out with and discover new adventures.",
  },
  {
    id: 7,
    name: "Ishara Rajapaksa",
    image:
      "https://media.licdn.com/dms/image/D5603AQEQjOfi9wQ_jQ/profile-displayphoto-shrink_800_800/0/1694199756068?e=2147483647&v=beta&t=K13n8YPucKrruo6u5bm827B0Izo3YBnSCh6lfS7NeK4",
    review:
      "Programs had amazing host accommodation that made you feel like part of the family.",
  },
  {
    id: 8,
    name: "Ranil Mendis",
    image:
      "https://media.licdn.com/dms/image/D5603AQEHePADNnUirg/profile-displayphoto-shrink_800_800/0/1695918296052?e=2147483647&v=beta&t=n_YSiJ5AnqvX-xNZFUTcjgXfydYQcA7L2LF5KGkikG0",
    review:
      "It was an amazing experience I will never forget. I really enjoyed being a part of this community effort. I look forward to volunteering in these programs again in the future.",
  },
  {
    id: 9,
    name: "Chathuri Jayawardena",
    image:
      "https://media.licdn.com/dms/image/C4E03AQFVZYx8lzULAA/profile-displayphoto-shrink_800_800/0/1658320342362?e=2147483647&v=beta&t=Bd6r1h8o2fIyNoCPBgxZxDFZ81efo5Tai1FLzUWrXdc",
    review:
      "Program coordinators were very responsible and helped suggest and arrange activities for us outside the volunteering.",
  },
];
