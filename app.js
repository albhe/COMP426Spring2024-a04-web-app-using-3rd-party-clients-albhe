let query = document.querySelector('#new-button');
query.addEventListener('click', () => {
    document.location.reload();
});
let dog_response = await fetch('https://dog.ceo/api/breeds/image/random');
let dog_response_data = await dog_response.json();
console.log(dog_response_data);
let dog_image = document.getElementById("dog_image");
dog_image.src = dog_response_data.message;
let food_response = await fetch('https://foodish-api.com/api');
let food_response_data = await food_response.json();
console.log(food_response_data);
let food_image = document.getElementById("food_image");
food_image.src = food_response_data.image;