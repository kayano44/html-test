let strings = ['Information', 'Networking', 'for', 'Innovation', 'and', 'Design'];
let cnt = 0;

function updateTarget() {
    let str =strings[cnt%strings.length];
    let element = document.getElementById('target');
    element.textContent = str;
    cnt++;
}

