const webSocket = new WebSocket("ws://localhost:8081");

function sendMessage(){
    const messageForm = document.getElementById('login-form');
    webSocket.send(messageForm.message.value);
}

document.querySelector('.enter').addEventListener('click', sendMessage);

webSocket.addEventListener("open", () => {
    console.log('you are connected');
});

webSocket.addEventListener("message", ({data}) => {
    let message = data.text().then(message => {
        let holder = document.createElement('div');
        holder.innerHTML = `<div class="object">
        <div class="squarediv"></div>
        <div class="text">
            <span class="name"> ${ message } </span>
            <span class="artist"> random user </span>
        </div>
    </div>`;
        //let holder = document.querySelector('.objectholder');
        document.querySelector('.objectholder').appendChild(holder);
        // let element = document.querySelector('.objectholder');
        // element.innerHTML += `<div class="object">
        //                             <div class="squarediv"></div>
        //                             <div class="text">
        //                                 <span class="name"> ${ message } </span>
        //                                 <span class="artist"> random user </span>
        //                             </div>
        //                         </div>`;
    });
    
});