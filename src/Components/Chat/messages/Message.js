import './Message.css';
// bootstrap flex
function Message() {
    return (
        <div>
            <div class="d-inline-flex p-2 bd-highlight">I'm an inline flexbox container!</div>
            <div class="d-flex flex-column bd-highlight mb-3">
                 <div class="p-2 bd-highlight">Flex item 1</div>
                <div class="p-2 bd-highlight">Flex item 2</div>
                <div class="p-2 bd-highlight">Flex item 3</div>
            </div>
            <div class="d-flex flex-column-reverse bd-highlight">
                <div class="p-2 bd-highlight">Flex item 1</div>
                 <div class="p-2 bd-highlight">Flex item 2</div>
                 <div class="p-2 bd-highlight">Flex item 3</div>
            </div>
            <span>
                <table>
                    <thead>
                       hello
                    </thead>
                    <tbody>
                        hiiiii
                    </tbody>
                </table>
            </span>
            </div>
    );
}

export default Message;