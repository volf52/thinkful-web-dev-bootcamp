// your code here!

function handleFormSubmit(e) {
    e.preventDefault();
    const text = jQuery.trim(
        $(this)
            .find('#user-text')
            .val()
    );
    const wordArray = text.split(' ');
    const words = wordArray.length;
    const uniqueWords = jQuery.unique(wordArray).length;
    const totalWordLength = wordArray.reduce((total, curr) => {
        total += curr.length;
        return total;
    }, 0);
    const avgLen = totalWordLength / wordArray.length;

    let mainDL = $('.text-report');
    mainDL.find('#js-word-count-res').text(words);
    mainDL.find('#js-unique-word-count-res').text(uniqueWords);
    mainDL.find('#js-avg-word-len-res').text(`${avgLen.toFixed(2)} characters`);
    mainDL.removeClass('hidden');
}

$(() => {
    const form = $('.js-text-form');
    form.submit(handleFormSubmit);
});
