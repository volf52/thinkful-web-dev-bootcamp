function textNormalizer(text) {
    // your code here
    return text.trim().toLowerCase();
}

function testTextNormalizer() {
    const text = "   let's GO SURFING NOW everyone is learning how   ";
    const expected = "let's go surfing now everyone is learning how";
    if (textNormalizer(text) === expected) {
        console.log('SUCCESS: `textNormalizer` is working');
    } else {
        console.log('FAILURE: `textNormalizer` is not working');
    }
}

testTextNormalizer();
