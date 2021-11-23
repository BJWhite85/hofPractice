// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function (fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
var multiplesOfFive = function (numbers) {
  var count = 0;

  _.each(numbers, function (number, index, collection) {
    if (number % 5 === 0) {
      count++;
    }
  });

  return count;

};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  var result = _.filter(fruits, function (fruit) { return fruit === targetFruit; });
  return result;
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  var result = _.filter(fruits, function (fruit) { return fruit[0] === letter; });
  return result;
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  var result = _.filter(desserts, function (dessert) { return dessert.type === 'cookie'; });
  return result;
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  var result = _.reduce(products, function (total, current) {
    var t;
    if (typeof total.price === 'string') {
      var t = parseFloat(total.price.substring(1));
    } else {
      t = total;
    }
    var c = parseFloat(current.price.substring(1));

    // console.log('t', t);
    // console.log('c', c);
    return t + c;
  });
  return result;

};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function (desserts) {
  var result = _.reduce(desserts, function(memo, item) {
    //console.log('Memo Type: ', memo.type);
    //console.log('Item Type: ', item.type);
    if (memo[item.type] === undefined) {
      memo[item.type] = 1;
      return memo;
    } else {
      memo[item.type] += 1;
      return memo;
    }


  }, {});
  //console.log('Final Object: ', result);
  return result;

};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
var ninetiesKid = function (movies) {
  var result = _.reduce(movies, function (memo, item) {
    //console.log('Memo: ', memo);
    //console.log('Item: ', item);
    //console.log('Release Year: ', item.releaseYear);
    if (item.releaseYear >= 1990 && item.releaseYear <= 2000) {
      memo.push(item.title);
    }
    return memo;
  }, []);
  //console.log('Result: ', result);
  return result;

};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  //console.log('Time Limit: ', timeLimit);
  var result = _.reduce (movies, function (memo, item) {
    //console.log('Memo: ', memo);
    //console.log('Item: ', item.runtime);
    if (memo === true) {
      return true;
    } else if (item.runtime < timeLimit) {
      return true;
    }
    return memo;
  }, false);
  //console.log('Result: ', result);
  return result;
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function (fruits) {
  var result = _.map(fruits, function (fruit) { return fruit.toUpperCase(); });
  //console.log(result);
  return result;

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function (desserts) {
  return _.map(desserts, function (dessert) {
    if (dessert.ingredients.includes('flour')) {
      dessert['glutenFree'] = false;
      return dessert;
    } else {
      dessert['glutenFree'] = true;
      return dessert;
    }
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.61'
    }
  ];

*/
var applyCoupon = function (groceries, coupon) {
  //console.log(coupon);
  return _.map(groceries, function (item) {
    var discount = parseFloat(item.price.substring(1)) * coupon;
    var salePrice = parseFloat(item.price.substring(1)) - discount;
    salePrice = '$' + salePrice.toFixed(2);
    // add the $$$$$
    //console.log('PRICE: ', item.price);
    //console.log('SALE PRICE: ', salePrice);
    item.salePrice = salePrice;
    return item;
  });

};
