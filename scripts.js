document.getElementById('myButton').addEventListener('click', function() {
    const paragraph = document.getElementById('myParagraph');
    const button = document.getElementById('myButton');

    paragraph.textContent = 'You clicked the button!';

    button.style.backgroundColor = '#d6b4fc';

    button.textContent = 'Yay!';
});
