const inputNum = document.querySelector('.inputNum')
const textInput = document.querySelector('.textInput')
const textOutput = document.querySelector('.textOutput')

const autoResize = () => {
    textInput.style.height = 'auto';
    textInput.style.height = textInput.scrollHeight + 'px';
}

const inputHandler = () => {
    const inpNum = parseInt(inputNum.value)
    const txtInp = textInput.value
    const regex = /\d+[\wа-яА-Я]+\./g;

    if (inpNum && txtInp.trim() !== '') {
        splitIntoBlocks(txtInp, inpNum)
    }

    if (txtInp.trim() !== '') {
        let div = document.createElement('div')
        div.className = 'OuterText'
        textOutput.appendChild(div)
        const match = regex.test(textInput.value)

        if (match) {
            div.innerHTML = textInput.value.replace(regex, '')
            document.querySelector('.OuterText').addEventListener('click', (e) => {
                    e.target.style.color = 'blue'
                    navigator.clipboard.writeText(e.target.innerText)
            })
        }
    }
}

inputNum.addEventListener('change', inputHandler)
textInput.addEventListener('change', inputHandler)
textInput.addEventListener('input', autoResize)

function splitIntoBlocks(text, size) {
    textOutput.innerHTML = ''
    const words = text.split(' ');
    const blocks = [];
    let current = '';
    
    words.forEach(word => {
        if ((current + ' ' + word).trim().length <= size) {
            current = (current + ' ' + word).trim();
        } else {
            blocks.push(current);
            current = word;
        }
    });
  
    if (current) {
        blocks.push(current);
    }
    
    for (let i = 0; i < blocks.length ; i++) {
        // textOutput.innerHTML += [i + 1] + '</br>' + '</br>' + blocks[i] + '</br>' + '</br>' + '</br>'
        let count = document.createElement('count')
        count.className = 'Count'
        textOutput.appendChild(count)

        let div = document.createElement('div')
        div.className = 'OuterText'
        textOutput.appendChild(div)
        count.innerHTML += [i + 1] + '</br>' + '</br>'
        div.innerHTML += blocks[i] + '</br>' + '</br>' + '</br>'
        // div.innerHTML += [i + 1] + '</br>' + '</br>' + blocks[i] + '</br>' + '</br>' + '</br>'

        document.querySelectorAll('.OuterText').forEach((item) => {
            item.addEventListener('click', () => {
                console.dir(item);
                item.style.color = 'blue'
                navigator.clipboard.writeText(item.textContent)
            })
        })
    }
  }