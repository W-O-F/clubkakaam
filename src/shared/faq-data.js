import React from "react"
const themes = [
  "Open innovation",
  "Employability",
  "Sustainable development",
  "Education",
  "Social security and awareness",
  "Food",
]

export const FAQ = [
  {
    id: 1,
    question: "Do you have a particular theme for the Hackathon?",
    solution: themes.map(theme => {
      return <tr>{theme}</tr>
    }),
  },
  {
    id: 2,
    question: "What can be the size of Team?",
    solution: "A team can consist of 1-4 members.",
  },
  {
    id: 4,
    question: "What do I need to do to participate?",
    solution: "Apply using devfolio and join Discord server.",
  },
  {
    id: 5,
    question: "Where I will get all my announcements?",
    solution: "On the Discord",
  },
  {
    id: 3,
    question: "Are there any registration charges?",
    solution: "Nope. None at all!",
  },
  {
    id: 4,
    question: "Is the selection per-member or per-team basis?",
    solution: "The selection is a per-team basis.",
  },
  {
    id: 5,
    question: "I don't have a CSE background. Can I still participate?",
    solution:
      "Yes. Creativity is independent of your technical skills. You can learn the tools and technologies anytime.",
  },
  {
    id: 6,
    question: "Do we get any certificate for participation?",
    solution:
      "Yes, you do get a certificate of participation if you qualify for the finals after the initial shortlisting.",
  },
  {
    id: 7,
    question: "I don't find my question listed here. What can I do?",
    solution: "You can always contact us.",
  },
]
