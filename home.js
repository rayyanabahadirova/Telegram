let data = [
    {
        id: 1,
        name: 'Alex',
        username: 'alex98',
        islastseen: '12:21',
        img: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
        text: 'How are you doing ?',
    },
    {
        id: 2,
        name: 'John',
        username: 'john21',
        islastseen: '07:21',
        img: 'https://cdn-icons-png.flaticon.com/512/236/236832.png',
        text: 'John is typing ...',
    },

    {
        id: 6,
        name: 'Micheal',
        username: 'michael',
        islastseen: 'online',
        img: 'https://cdn-icons-png.flaticon.com/512/219/219986.png',
        text: 'Michael is typing ...',
    },
    {
        id: 7,
        name: 'Travor',
        username: 'travor',
        islastseen: '12:21',
        img: 'https://brithouse.ru/wp-content/uploads/2015/07/flat-face-icon-23.png',
        text: 'How are you doing ?',
    },
    {
        id: 8,
        name: 'Bot Father',
        username: 'botfather',
        islastseen: 'bot',
        img: 'http://lubiteliyablok.com/wp-content/uploads/2015/07/4.2.png',
        text: 'How are you doing ?',
    },
    {
        id: 9,
        name: 'Vk Music Bot',
        username: 'vkmbot',
        islastseen: 'bot',
        img: 'https://telegramchannels.me/storage/media-logo/1907/vkm_bot.jpg',
        text: 'How are you doing ?',
    },
    {
        id: 10,
        name: 'DC Official Group',
        username: 'dc',
        islastseen: 'group',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMknCf_bq9BM5WOroIwGJvMuFooJcOhTvulRlgNsskfLRrWFERBOwTiYeZPtGIu5R_Atk&usqp=CAU',
        text: 'How are you doing ?',
    },
    {
        id: 1,
        name: 'Alex',
        username: 'alex98',
        islastseen: '12:21',
        img: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
        text: 'How are you doing ?',
    },
    {
        id: 3,
        name: 'Jastin',
        username: 'jastin12',
        islastseen: '12:32',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7gjz_tqhCGxPjl-J099B6Ll8LDZAkNqXpvo6gXoc-3dTYzCf4lvxx1T_lJa7BFP1G2g&usqp=CAU',
        text: 'John Doe ?',
    },
    {
        id: 4,
        name: 'Lisa',
        username: 'lisa007',
        islastseen: '12:21',
        img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
        text: 'How are you doing ?',
    },
    {
        id: 5,
        name: 'LiLa',
        username: 'lila12',
        islastseen: '12:21',
        img: 'https://bak.kg/wp-content/uploads/2020/04/219969.png',
        text: 'Im Lila ?',
    },
    {
        id: 9,
        name: 'Vk Music Bot',
        username: 'vkmbot',
        islastseen: 'bot',
        img: 'https://telegramchannels.me/storage/media-logo/1907/vkm_bot.jpg',
        text: 'How are you doing ?',
    },
    {
        id: 10,
        name: 'DC Official Group',
        username: 'dc',
        islastseen: 'group',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMknCf_bq9BM5WOroIwGJvMuFooJcOhTvulRlgNsskfLRrWFERBOwTiYeZPtGIu5R_Atk&usqp=CAU',
        text: 'How are you doing ?',
    },
    {
        id: 1,
        name: 'Alex',
        username: 'alex98',
        islastseen: '12:21',
        img: 'https://www.pngarts.com/files/6/User-Avatar-in-Suit-PNG.png',
        text: 'How are you doing ?',
    },
    {
        id: 3,
        name: 'Jastin',
        username: 'jastin12',
        islastseen: '12:32',
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz7gjz_tqhCGxPjl-J099B6Ll8LDZAkNqXpvo6gXoc-3dTYzCf4lvxx1T_lJa7BFP1G2g&usqp=CAU',
        text: 'John Doe ?',
    },
    {
        id: 4,
        name: 'Lisa',
        username: 'lisa007',
        islastseen: '12:21',
        img: 'https://icon-library.com/images/avatar-icon-images/avatar-icon-images-6.jpg',
        text: 'How are you doing ?',
    },
]
var SearchInput = document.getElementById('search-main');


function InitalList() {
    var text = ''
    data.map((item, index) => {
        text += `
            <div class='userwrap'>
                <img src=${item.img} alt='' >
                <div class='text-div'>
                    <div class='qator-bir'>
                        <h2>${item.name}</h2>
                        <p>${item.islastseen}</p>
                    </div>
                    <p class='text-msg'>${item.text}</p>
                </div>
            </div>
        `
    })

    document.getElementById('users').innerHTML = text

}

function Searching() {

    var filtered = data.filter((item) => {
        return item.username.includes(SearchInput.value)
    })

    var text = ''
    filtered.map((item, index) => {
        text += `
            <div class='userwrap'>
                <img src=${item.img} alt='' >
                <div class='text-div'>
                    <div class='qator-bir'>
                        <h2>${item.name}</h2>
                        <p>${item.islastseen}</p>
                    </div>
                    <p class='text-msg'>${item.text}</p>
                </div>
            </div>
        `
    })

    document.getElementById('users').innerHTML = text !== '' ? text : '<p class="notfound">No user found with this username</p>'
}

SearchInput.addEventListener('keydown', () => {
    Searching()
})

InitalList()



window.addEventListener("dblclick",()=>{
    closeNav()
})

//side-bar
function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.body.style.backgroundColor = "white";
  }


var KunTun = document.getElementById('tunkun');
document.getElementById('all-words').style.color = 'white';

KunTun.addEventListener('click',(event)=>{
    if(event.target.checked){
        document.getElementById('mySidenav').style.backgroundColor = '#292E34';
        document.getElementById('topdiv').style.backgroundColor = '#B2B938';
        document.getElementById('all-words').style.color = 'white';
        document.getElementById('mySidenav').style.color = 'white';
    }else{
        document.getElementById('mySidenav').style.backgroundColor = 'white';
        document.getElementById('topdiv').style.backgroundColor = 'white';
        document.getElementById('topdiv').style.color = 'black';
        document.getElementById('all-words').style.color = 'black';
        document.getElementById('mySidenav').style.color = 'black';
    }
})