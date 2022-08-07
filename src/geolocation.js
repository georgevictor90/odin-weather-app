// export default function getUserLocation(userLocation) {
//   if ("geolocation" in navigator) {
//     /* geolocation is available */
//     navigator.geolocation.getCurrentPosition((position) => {
//       userLocation = {
//         lat: position.coords.latitude,
//         lon: position.coords.longitude,
//       };
//     });
//   } else {
//     /* geolocation IS NOT available */
//     console.error;
//   }
// }

export default async function getUserLocation() {
  try {
    if ("geolocation" in navigator) {
      /* geolocation is available */
      navigator.geolocation.getCurrentPosition((position) => {
        return {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        };
      });
    } else {
      /* geolocation IS NOT available */
      console.error;
    }
  } catch (error) {
    console.error;
  }
}
