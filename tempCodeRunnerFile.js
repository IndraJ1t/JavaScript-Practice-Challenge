function HTMLElements(str) {
    const tagPattern = /<\/?([a-z]+)[^>]*>/gi;
    const stack = [];
    const openTags = [];

    let match;
    while ((match = tagPattern.exec(str)) !== null) {
        const [fullMatch, tag] = match;
        if (fullMatch.startsWith("</")) {
            if (stack.length === 0 || stack[stack.length - 1] !== tag) {
                // Return the first problematic opening tag
                const errMessage = (stack.length === 0 ? openTags[0] : stack[stack.length - 1]);
                console.log(`Error on ${errMessage} tag`);
            }
            stack.pop();
        } else {
            stack.push(tag);
            openTags.push(tag);
        }
    }

    console.log(stack.length === 0 ? "No Error" : openTags[0]);

}
HTMLElements("<div><b><p>hello world</p></b><div>")