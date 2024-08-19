document.getElementById('spinnerButton').addEventListener('click', function() {
    var spinnerButton = document.getElementById('spinnerButton');
    var spinner = document.getElementById('spinner');
    
    spinnerButton.classList.add('hidden');
    
    spinner.classList.remove('hidden');
});
