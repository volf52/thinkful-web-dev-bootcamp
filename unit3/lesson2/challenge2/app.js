const state = {
    items: [],
};

// @stateModifiers
const initItemlist = (state, itemArr) => {
    state.items = [];
    for (let i = 0; i < itemArr.length; i++) {
        addItem(state, $(itemArr[i]).text());
    }
};

const addItem = (state, item) => {
    state.items.push(item);
};

const removeItem = (state, itemIndex) => {
    state.items.splice(itemIndex, 1);
};

// @renderFuncs

const renderList = (state, element) => {
    let innerhtml = state.items.map(item => {
        return `<li>
                    <span class="shopping-item">${item}</span>
                    <div class="shopping-item-controls">
                        <button class="shopping-item-toggle">
                            <span class="button-label">check</span>
                        </button>
                        <button class="shopping-item-delete">
                            <span class="button-label">delete</span>
                        </button>
                    </div>
                </li>`;
    });
    element.innerHTML = innerhtml;
};

// @eventHandlers

const handleFormSubmit = e => {
    e.preventDefault();
    const item = $(e.currentTarget)
        .children('input[name=shopping-list-entry]')
        .val();
    addItem(state, item);
    renderList(state, $('ul.shopping-list')[0]);
};

const handleCheckButton = e => {
    e.preventDefault();
    $(e.currentTarget)
        .closest('li')
        .children('span.shopping-item')
        .toggleClass('shopping-item__checked');
};

const handleDeleteButton = e => {
    e.preventDefault();
    const index = $(e.currentTarget)
        .closest('li')
        .index();
    removeItem(state, index);
    renderList(state, $('ul.shopping-list')[0]);
};

// @appLogic

$(document).ready(() => {
    const uList = $('ul.shopping-list');
    $(initItemlist(state, $('span.shopping-item')));
    $('#js-shopping-list-form').submit(handleFormSubmit);
    $(uList).on('click', 'button.shopping-item-toggle', handleCheckButton);
    $(uList).on('click', 'button.shopping-item-delete', handleDeleteButton);
});
