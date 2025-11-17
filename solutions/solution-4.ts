type Rating = { title: string; rating: number };

function filterByRating(items: Rating[]): Rating[] {
  return items.filter((item) => {
    if (item.rating < 0 || item.rating > 5) {
      throw new Error("Rating must be between 0 and 5");
    }

    return item.rating >= 4;
  });
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 },
];

console.log(filterByRating(books));
