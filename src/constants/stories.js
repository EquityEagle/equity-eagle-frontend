import { CLA45, Placeholder } from "../assets";
import { generateUniqueId } from "../lib/functions";

export const storiesdata = [
  {
    img: Placeholder,
    seen: false,
    total: 2,
    username: "Chris",
    story: [
      { img: CLA45, text: "Just got my new weep", id: generateUniqueId() },
      { text: "Just tryna test this my new weep", id: generateUniqueId() },
      { text: "Hmmmmm", id: generateUniqueId() },
    ],
  },
  {
    img: Placeholder,
    seen: true,
    total: 2,
    username: "John",
    story: [{ text: "What a day new setup just hit tp" }],
  },
  {
    img: Placeholder,
    seen: false,
    total: 6,
    username: "Ralph",
    story: [{ text: "New baby coming up soon 😎" }],
  },
];
