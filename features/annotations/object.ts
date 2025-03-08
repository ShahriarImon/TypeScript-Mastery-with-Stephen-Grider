// level - 3 Destructuring.......
const user = {
  id: 1,
  name: "John Doe",
  address: {
    city: "New York",
    country: "USA",
    coordinates: {
      lat: 40.7128,
      lng: -74.006,
    },
  },
};
const {
  address: {
    city,
    coordinates: { lat, lng },
  },
}: {
  address: {
    city: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
} = user;
console.log("lng:", lng);
