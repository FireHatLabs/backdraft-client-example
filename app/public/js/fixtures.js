BDApp.Item.FIXTURES = [
  {
    id: 1,
    title: "Charlie One",
    description: "Test Item",
    comments: [11,12]
  },
  {
    id: 2,
    title: "Alpha Two",
    description: "Another Test Item"
  },
  {
    id: 3,
    title: "Bravo Three",
    description: "Another Test Item"
  }
];

BDApp.Comment.FIXTURES = [
  {
    id: 11,
    item: 1,
    content: "Another Test Comment"
  },
  {
    id: 12,
    item: 1,
    content: "Test Comment"
  }
];