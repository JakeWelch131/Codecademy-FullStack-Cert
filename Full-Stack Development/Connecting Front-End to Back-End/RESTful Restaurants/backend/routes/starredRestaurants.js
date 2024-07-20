const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const ALL_RESTAURANTS = require("./restaurants").restaurants;

/**
 * A list of starred restaurants.
 * In a "real" application, this data would be maintained in a database.
 */
let STARRED_RESTAURANTS = [
  {
    id: "a7272cd9-26fb-44b5-8d53-9781f55175a1",
    restaurantId: "869c848c-7a58-4ed6-ab88-72ee2e8e677c",
    comment: "Best pho in NYC",
  },
  {
    id: "8df59b21-2152-4f9b-9200-95c19aa88226",
    restaurantId: "e8036613-4b72-46f6-ab5e-edd2fc7c4fe4",
    comment: "Their lunch special is the best!",
  },
];

/**
 * Feature 6: Getting the list of all starred restaurants.
 */
router.get("/", (req, res) => {
  /**
   * We need to join our starred data with the all restaurants data to get the names.
   * Normally this join would happen in the database.
   */
  const joinedStarredRestaurants = STARRED_RESTAURANTS.map(
    (starredRestaurant) => {
      const restaurant = ALL_RESTAURANTS.find(
        (restaurant) => restaurant.id === starredRestaurant.restaurantId
      );

      return {
        id: starredRestaurant.id,
        comment: starredRestaurant.comment,
        name: restaurant.name,
      };
    }
  );

  res.json(joinedStarredRestaurants);
});

/**
 * Feature 7: Getting a specific starred restaurant.
 */
router.get("/:id", (req, res) => {
  const starredRestaurant = STARRED_RESTAURANTS.find(
    (starredRestaurant) => starredRestaurant.id === req.params.id
  );

  if (starredRestaurant) {
    const restaurant = ALL_RESTAURANTS.find(
      (restaurant) => restaurant.id === starredRestaurant.restaurantId
    );

    res.json({
      id: starredRestaurant.id,
      comment: starredRestaurant.comment,
      name: restaurant.name,
    });
  } else {
    res.status(404).json({ message: "Starred restaurant not found" });
  }
});


/**
 * Feature 8: Adding to your list of starred restaurants.
 */
router.post("/", (req, res) => {
  const { id } = req.body;
  const restaurant = ALL_RESTAURANTS.find((restaurant) => restaurant.id === id);

  if(!restaurant) {
    res.status(404).json({ message: "Restaurant not found" });
    return;
  }

  const newStarredRestaurant = {
    id: uuidv4(),
    restaurantId: id,
    comment: null
  };

  STARRED_RESTAURANTS.push(newStarredRestaurant);

  res.status(200).send({
    id: newStarredRestaurant.id,
    comment: newStarredRestaurant.comment,
    name: restaurant.name
  
  });
})


/**
 * Feature 9: Deleting from your list of starred restaurants.
 */
router.delete("/:id", (req, res) => {
  const {id} = req.params;
  const newList = STARRED_RESTAURANTS.filter((starredRestaurant) => starredRestaurant.id !== id);
  if (newList.length === STARRED_RESTAURANTS.length) {
    res.status(404).json({ message: "Starred restaurant not found" });
    return;
  }
  STARRED_RESTAURANTS = newList;
  res.sendStatus(200);
});


/**
 * Feature 10: Updating your comment of a starred restaurant.
 */
router.put("/:id", (req, res) => {
  const {id} = req.params;
  const {comment} = req.body;
  const starredRestuarant = STARRED_RESTAURANTS.find((starredRestaurant) => starredRestaurant.id === id);
  if (!starredRestuarant) {
    res.status(404).json({ message: "Starred restaurant not found" });
    return;
  }
  starredRestuarant.comment = comment;
  res.status(200).json(starredRestuarant);
});


module.exports = router;