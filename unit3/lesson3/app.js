const YOUTUBE_SEARCH_API_ENDPOINT =
    'https://www.googleapis.com/youtube/v3/search';

const fetchData = (searchTerm, callbackFunc) => {
    const query = {
        part: 'snippet',
        key: 'AIzaSyCA_w0HQDbj2fnyclK2KyWGzraBczNW4sI',
        q: `${searchTerm}`,
    };
    $.getJSON(YOUTUBE_SEARCH_API_ENDPOINT, query, callbackFunc);
};

const renderResult = result => {
    const title = result.snippet.title;
    const videoURL = 'https://www.youtube.com/watch?v=' + result.id.videoId;
    const thumbnailURL = result.snippet.thumbnails.medium.url;
    const channelName = result.snippet.channelTitle;
    const channelURL =
        'https://www.youtube.com/channel/' + result.snippet.channelId;
    const description = result.snippet.description;
    return `
    <li>
        <h5>
            <a
                class="js-result-title"
                href="${videoURL}"
                target="_blank"
            >${title}</a>
            on channel
            <a
                class="js-result-channel-title"
                href="${channelURL}"
                target="_blank"
            >${channelName}</a>
        </h5>
        <div class="row">
            <div class="col-6">
                <a href="${videoURL}" class="js-result-thumbnail-resp" target="_blank">
                    <img
                        src="${thumbnailURL}"
                        alt="${description}"
                        class="js-result-thumbnail"
                    />
                </a>
            </div>
        </div>
    </li>
    `;
};

const displayResults = data => {
    const res = data.items.map((item, index) => renderResult(item));
    $('.js-search-results').html(res);
};

$(document).ready(e => {
    const form = $('form#js-video-search-form').submit(e => {
        e.preventDefault();
        let queryTerm = $('input#searchQuery').val();
        if (queryTerm !== '') fetchData(queryTerm, displayResults);
    });
});
