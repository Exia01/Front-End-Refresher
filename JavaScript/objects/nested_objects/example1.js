let posts = [
  {
    title: 'Cats are evil',
    author: 'Some random guy',
    comments: ['mewoooo!', 'I agree']
  },
  {
    title: 'This is a second post',
    author: '-CatLover',
    comments: ['hello There!', 'Lovveee Cats']
  },
  [1, 3, 2, 3, {message:"Helloo"}]
];

posts.forEach(obj => {
  console.log(obj.title);
});
posts.forEach(obj => {
  console.log(obj);
});
posts.forEach(obj => {
  if (obj.comments) {
    console.log(obj.comments[1]);
  }
});
console.log(posts[2][posts[2].length-1])
