let idIincrement = 0;

import {COLORS} from "./utils";

export const getTask = () => ({
  id: idIincrement++,
  description: [`Prepare for the pitch`, `Find money for travel`, `Eat something`][
    Math.floor(Math.random() * 3)
  ],
  dueDate: Date.now() + 1 + Math.floor(Math.random() * 7) * 24 * 60 * 60 * 1000,
  tags: new Set([`cinema`, `entertainment`, `myself`, `cinema`]),
  repeatingDays: {
    mo: false,
    tu: false,
    we: Boolean(Math.round(Math.random())),
    th: false,
    fr: false,
    sa: false,
    su: false
  },
  color: COLORS[Math.floor(Math.random() * 5)],
  isFavorite: [true, false][Math.floor(Math.random() * 2)]
});

export const getFilter = (tasksArray) => [
  {
    title: `All`,
    count: tasksArray.length
  },
  {
    title: `Overdue`,
    count: tasksArray.filter(({dueDate}) => Date.now() > dueDate).length
  },
  {
    title: `Today`,
    count: tasksArray.filter(({dueDate}) => {
      let today = new Date();
      let dueDay = new Date(dueDate);
      return today.toDateString() === dueDay.toDateString();
    }).length
  },
  {
    title: `Favorites`,
    count: tasksArray.filter(({isFavorite}) => isFavorite).length
  },
  {
    title: `Repeating`,
    count: tasksArray.filter(({repeatingDays}) => Object.values(repeatingDays).includes(true)).length
  },
  {
    title: `Tags`,
    count: tasksArray.filter(({tags}) => tags.size > 0).length
  },
  {
    title: `Archive`,
    count: 42
  }
];

// EOF
