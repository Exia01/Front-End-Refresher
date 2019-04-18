let lis = document.querySelectorAll('li');
for (let tag of lis) {
  tag.addEventListener('mouseover', function() {
    //   console.log(this)
    this.classList.add('selected');
  });
  tag.addEventListener('mouseout', () => {
    tag.classList.remove('selected');
  });
  tag.addEventListener('click', function() {
    this.classList.toggle('done');
  });
}
