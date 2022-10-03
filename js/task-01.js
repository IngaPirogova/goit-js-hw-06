
const liClassItemRef = document.querySelectorAll('.item')
console.log('Number of categories:', liClassItemRef.length);

liClassItemRef.forEach((element) => {
    const titleRef = element.querySelector('h2').textContent;

    const liRef = element.querySelectorAll('li');
    const qtyLiRef = liRef.length;

    console.log('Category:', titleRef);
    console.log('Elements:', qtyLiRef);
});



