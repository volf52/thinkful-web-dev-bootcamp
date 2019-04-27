let state = {
    items: [],
};

// @stateModifier
const addItem = (state, item) => {
    state.items.push(item);
};

// @renderFunc
const renderList = (state, element) => {
    let itemsHTML = state.items.map(item => {
        return `<li>${item}</li>`;
    });
    element.html(itemsHTML);
};

// @eventListener
$('.shopping-list-add').submit(e => {
    e.preventDefault();
    addItem(state, $('.shopping-list-add-input').val());
    renderList(state, $('.shopping-list'));
});
