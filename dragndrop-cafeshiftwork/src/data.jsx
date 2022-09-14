export const itemDataShift = [
  {
    shiftId: "0",
    shiftName: "Morning Shift",
    workingPerson: [
      {
        teamName: "Team-A",
        teamId: "A",
        teamMember: [
          {
            name: "Johan Pribadi",
            personId: "10110",
          },
          {
            name: "Adit Kurnia",
            personId: "10111",
          },
          {
            name: "Jason Krismawan",
            personId: "10112",
          },
          {
            name: "Lauren Kivia",
            personId: "10113",
          },
        ],
      },
      {
        teamName: "Team-B",
        teamId: "B",
        teamMember: [
          {
            name: "Kurnia Lia",
            personId: "101201",
          },
          {
            name: "Prikila Lianita",
            personId: "101211",
          },
          {
            name: "Prika Riyadi",
            personId: "101221",
          },
          {
            name: "Evan Kevin",
            personId: "101231",
          },
        ],
      },
    ],
  },
  {
    shiftId: "1",
    shiftName: "Afternoon Shift",
    workingPerson: [
      {
        teamName: "Team-C",
        teamId: "C",
        teamMember: [
          {
            name: "Jovan Natanael",
            personId: "10230",
          },
          {
            name: "Ervan Jovian",
            personId: "10231",
          },
          {
            name: "Dionisius Darrel",
            personId: "10232",
          },
          {
            name: "Michael Setiawan",
            personId: "10233",
          },
        ],
      },
      {
        teamName: "Team-D",
        teamId: "D",
        teamMember: [
          {
            name: "Kurnia Lia",
            personId: "10120",
          },
          {
            name: "Prikila Lianita",
            personId: "10121",
          },
          {
            name: "Prika Riyadi",
            personId: "10122",
          },
          {
            name: "Evan Kevin",
            personId: "10123",
          },
        ],
      },
    ],
  },
];

export const customStylesForSelect = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "#333",
    padding: 10,
  }),
  control: (base, state) => ({
    ...base,
    border: "2px solid #333",
    boxShadow: state.isFocused ? 0 : 0,
    "&:hover": {
      border: state.isFocused ? "2px solid #222" : "2px solid #333",
    },
  }),
};
