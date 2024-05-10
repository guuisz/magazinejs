function Cor(rgb,valor) {
    this.rgb = rgb;
    this.valor = valor;
}

let res97 = window.innerHeight;

const rosaRGB = new Cor('rgb(255, 96, 140)',1);
const brancoRGB = new Cor('rgb(255, 255, 255)',2);
const azulRGB = new Cor('rgb(0, 193, 181)',3);
const laranjaRGB = new Cor('rgb(255, 101, 26)',4);
const amareloRGB = new Cor('rgb(255, 190, 0)',5);
const azulEscuroRGB = new Cor('rgb(29, 63, 187)',6);
const vermelhoRGB = new Cor('rgb(227, 5, 18)',7);
const coresArray = [rosaRGB, brancoRGB, azulRGB, laranjaRGB, amareloRGB, azulEscuroRGB, vermelhoRGB];

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

function selecionaQuery(query) {
    return document.querySelector(query);
}


function alteraCor(query, cor) {
    selecionaQuery(query).style.backgroundColor = cor;
}

function retornaNum(query) {
    let num;
    coresArray.forEach(function(corAtual) {
        if (selecionaQuery(query).style.backgroundColor == corAtual.rgb) {
            num = corAtual.valor;
        } else if (selecionaQuery(query).style.backgroundColor == '') {
            num = 1;
        }
    })
    return num;
}

function irParaRosa() {
    alteraCor('.colorBG', rosaRGB.rgb);
    document.querySelector('.image_rosa').style.transform = 'translateY(0px)';
    document.querySelector('.image_branca').style.transform = `translateY(${res97}px)`;
    document.querySelector('.image_azul').style.transform = `translateY(${res97*2}px)`;
    document.querySelector('.image_laranja').style.transform = `translateY(${res97*3}px)`;
    document.querySelector('.image_amarelo').style.transform = `translateY(${res97*4}px)`;
    document.querySelector('.image_azulE').style.transform = `translateY(${res97*5}px)`;
    document.querySelector('.image_vermelho').style.transform = `translateY(${res97*5}px)`;
}

function irParaBranco() {
    numeroAtual = retornaNum('.colorBG');
    alteraCor('.colorBG', brancoRGB.rgb);
    if(numeroAtual < brancoRGB.valor) {
        document.querySelector('.image_rosa').style.transform = `translateY(${-res97}px)`;
        document.querySelector('.image_branca').style.transform = `translateY(${-res97}px)`;
    } else {
        document.querySelector('.image_branca').style.transform = `translateY(${-res97}px)`;
        document.querySelector('.image_azul').style.transform = `translateY(${res97*2}px)`;
        document.querySelector('.image_laranja').style.transform = `translateY(${res97*3}px)`;
        document.querySelector('.image_amarelo').style.transform = `translateY(${res97*4}px)`;
        document.querySelector('.image_azulE').style.transform = `translateY(${res97*5}px)`;
        document.querySelector('.image_vermelho').style.transform = `translateY(${res97*5}px)`;
    }
}

function irParaAzul() {
    numeroAtual = retornaNum('.colorBG');
    alteraCor('.colorBG', azulRGB.rgb);
    if (numeroAtual < azulRGB.valor) {
        document.querySelector('.image_rosa').style.transform = `translateY(${-res97}px)`;
        document.querySelector('.image_branca').style.transform = `translateY(${-res97*2}px)`;
        document.querySelector('.image_azul').style.transform = `translateY(${-res97*2}px)`;
    } else {
        document.querySelector('.image_azul').style.transform = `translateY(${-res97*2}px)`;
        document.querySelector('.image_laranja').style.transform = `translateY(${res97*3}px)`;
        document.querySelector('.image_amarelo').style.transform = `translateY(${res97*4}px)`;
        document.querySelector('.image_azulE').style.transform = `translateY(${res97*5}px)`;
        document.querySelector('.image_vermelho').style.transform = `translateY(${res97*5}px)`;
    }
}

function irParaLaranja() {
    numeroAtual = retornaNum('.colorBG');
    alteraCor('.colorBG', laranjaRGB.rgb);
    if (numeroAtual < laranjaRGB.valor) {
        document.querySelector('.image_rosa').style.transform = `translateY(${-res97}px)`;
        document.querySelector('.image_branca').style.transform = `translateY(${-res97*2}px)`;
        document.querySelector('.image_azul').style.transform = `translateY(${-res97*3}px)`;
        document.querySelector('.image_laranja').style.transform = `translateY(${-res97*3}px)`;
    } else {
        document.querySelector('.image_laranja').style.transform = `translateY(${-res97*3}px)`;
        document.querySelector('.image_amarelo').style.transform = `translateY(${res97*4}px)`;
        document.querySelector('.image_azulE').style.transform = `translateY(${res97*5}px)`;
        document.querySelector('.image_vermelho').style.transform = `translateY(${res97*5}px)`;
    }
}

function irParaAmarelo() {
    numeroAtual = retornaNum('.colorBG');
    alteraCor('.colorBG', amareloRGB.rgb);
    if (numeroAtual < amareloRGB.valor) {
        document.querySelector('.image_rosa').style.transform = `translateY(${-res97}px)`;
        document.querySelector('.image_branca').style.transform = `translateY(${-res97*2}px)`;
        document.querySelector('.image_azul').style.transform = `translateY(${-res97*3}px)`;
        document.querySelector('.image_laranja').style.transform = `translateY(${-res97*4}px)`;
        document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*4}px)`;
    } else {
        document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*4}px)`;
        document.querySelector('.image_azulE').style.transform = `translateY(${res97*5}px)`;
        document.querySelector('.image_vermelho').style.transform = `translateY(${res97*5}px)`;
    }
}

function irParaAzulE() {
    numeroAtual = retornaNum('.colorBG');
    alteraCor('.colorBG', azulEscuroRGB.rgb);
    if (numeroAtual < azulEscuroRGB.valor) {
        document.querySelector('.image_rosa').style.transform = `translateY(${-res97}px)`;
        document.querySelector('.image_branca').style.transform = `translateY(${-res97*2}px)`;
        document.querySelector('.image_azul').style.transform = `translateY(${-res97*3}px)`;
        document.querySelector('.image_laranja').style.transform = `translateY(${-res97*4}px)`;
        document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*5}px)`;
        document.querySelector('.image_azulE').style.transform = `translateY(${-res97*5}px)`;
    } else {
        document.querySelector('.image_azulE').style.transform = `translateY(${-res97*5}px)`;
        document.querySelector('.image_vermelho').style.transform = `translateY(${res97*5}px)`;
    }

}

function irParaVermelho() {
    alteraCor('.colorBG', vermelhoRGB.rgb);
    document.querySelector('.image_rosa').style.transform = `translateY(${-res97}px)`;
    document.querySelector('.image_branca').style.transform = `translateY(${-res97*2}px)`;
    document.querySelector('.image_azul').style.transform = `translateY(${-res97*3}px)`;
    document.querySelector('.image_laranja').style.transform = `translateY(${-res97*4}px)`;
    document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*5}px)`;
    document.querySelector('.image_azulE').style.transform = `translateY(${-res97*6}px)`;
    document.querySelector('.image_vermelho').style.transform = `translateY(${-res97*6}px)`;
}

function togglearUp(imageClass) {
    switch (imageClass) {
        case 'image_branca': {
            document.querySelector('.image_branca').style.transform = `translateY(${res97}px)`;
            document.querySelector('.image_rosa').style.transform = 'translateY(0px)';
            break;
        }
        case 'image_azul': {
            document.querySelector('.image_azul').style.transform = `translateY(${-res97}px)`;
            document.querySelector('.image_branca').style.transform = `translateY(${-res97}px)`;
            break;
        }
        case 'image_laranja': {
            document.querySelector('.image_laranja').style.transform = `translateY(${-res97*2}px)`;
            document.querySelector('.image_azul').style.transform = `translateY(${-res97*2}px)`;
            break;
        }
        case 'image_amarelo': {
            document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*3}px)`;
            document.querySelector('.image_laranja').style.transform = `translateY(${-res97*3}px)`;
            break;
        }
        case 'image_azulE': {
            document.querySelector('.image_azulE').style.transform = `translateY(${-res97*4}px)`;
            document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*4}px)`;
            break;
        }
        case 'image_vermelho': {
            document.querySelector('.image_vermelho').style.transform = `translateY(${-res97*5}px)`;
            document.querySelector('.image_azulE').style.transform = `translateY(${-res97*5}px)`;
            break;
        }
    }
}

function togglearDown(imageClass) {
    switch (imageClass) {
        case 'image_rosa': {
            document.querySelector('.image_rosa').style.transform = `translateY(${-res97}px)`;
            document.querySelector('.image_branca').style.transform = `translateY(${-res97}px)`;
            break;
        }
        case 'image_branca': {
            document.querySelector('.image_branca').style.transform = `translateY(${-res97*2}px)`;
            document.querySelector('.image_azul').style.transform = `translateY(${-res97*2}px)`;
            break;
        }
        case 'image_azul': {
            document.querySelector('.image_azul').style.transform = `translateY(${-res97*3}px)`;
            document.querySelector('.image_laranja').style.transform = `translateY(${-res97*3}px)`;
            break;
        }
        case 'image_laranja': {
            document.querySelector('.image_laranja').style.transform = `translateY(${-res97*4}px)`;
            document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*4}px)`;
            break;
        }
        case 'image_amarelo': {
            document.querySelector('.image_amarelo').style.transform = `translateY(${-res97*5}px)`;
            document.querySelector('.image_azulE').style.transform = `translateY(${-res97*5}px)`;
            break;
        }
        case 'image_azulE': {
            document.querySelector('.image_azulE').style.transform = `translateY(${-res97*6}px)`;
            document.querySelector('.image_vermelho').style.transform = `translateY(${-res97*6}px)`;
            break;
        }
    }
}

function handleScroll(event) {
    switch (selecionaQuery('.colorBG').style.backgroundColor) {
        case rosaRGB.rgb:
            if (event.deltaY > 0) {
                togglearDown('image_rosa');
                alteraCor('.colorBG', brancoRGB.rgb);
                break;
            }
        case brancoRGB.rgb:
            if (event.deltaY < 0) {
                togglearUp('image_branca', 'image_rosa')
                alteraCor('.colorBG', rosaRGB.rgb);
            } else {
                togglearDown('image_branca','image_azul');
                alteraCor('.colorBG', azulRGB.rgb);
            }
            break;
        case azulRGB.rgb:
            if (event.deltaY < 0) {
                togglearUp('image_azul','image_branca');
                alteraCor('.colorBG', brancoRGB.rgb);
            } else {
                togglearDown('image_azul','image_laranja');
                alteraCor('.colorBG', laranjaRGB.rgb);
            }
            break;
        case laranjaRGB.rgb:
            if (event.deltaY < 0) {
                togglearUp('image_laranja','image_azul');
                alteraCor('.colorBG', azulRGB.rgb);
            } else {
                togglearDown('image_laranja','image_amarelo');
                alteraCor('.colorBG', amareloRGB.rgb);
            }
            break;
        case amareloRGB.rgb:
            if (event.deltaY < 0) {
                togglearUp('image_amarelo','image_azulE');
                alteraCor('.colorBG', laranjaRGB.rgb);
            } else {
                togglearDown('image_amarelo','image_azulE');
                alteraCor('.colorBG', azulEscuroRGB.rgb);
            }
            break;
        case azulEscuroRGB.rgb:
            if (event.deltaY < 0) {
                togglearUp('image_azulE','image_amarelo');
                alteraCor('.colorBG', amareloRGB.rgb);
            } else {
                togglearDown('image_azulE','image_vermelho');
                alteraCor('.colorBG', vermelhoRGB.rgb);
            }
            break;
        case vermelhoRGB.rgb:
            if (event.deltaY < 0) {
                togglearUp('image_vermelho','image_azulE');
                alteraCor('.colorBG', azulEscuroRGB.rgb);
            }
            break;
        default:
            if (event.deltaY > 0) {
                var element = selecionaQuery('.colorBG');
                togglearDown('image_rosa','image_branca');
                alteraCor('.colorBG', brancoRGB.rgb)
            }
            break;
    }
}
window.addEventListener("wheel", handleScroll);