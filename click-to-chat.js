const clickToChat = document.querySelector('.arqam_web-click_to_chat'),
  chatInfo = document.querySelector('.chat-info')

clickToChat.addEventListener('click', function () {
    window.open('https://wa.me/201121600780?text=Hello%20there!', '_blank');
  document.createElement('a').href("") =  onclick()
})
document.addEventListener('mouseover', function (e) {
    if (e.target.className == "arqam_web-click_to_chat") {
        chatInfo.style.cssText = 'visibility: visible; display: block; opacity: 1;'
    } else {
        chatInfo.style.cssText = 'visibility: hidden; display: none; opacity: 0;'
    }
})
