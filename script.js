const inputNum = document.querySelector('.inputNum')
const textInput = document.querySelector('.textInput')
const textOutput = document.querySelector('.textOutput')

const inputHandler = () => {
    const inpNum = parseInt(inputNum.value)
    const txtInp = textInput.value

    if (inpNum && txtInp.trim() !== '') {
        splitIntoBlocks(txtInp, inpNum)
    }
}

inputNum.addEventListener('change', inputHandler)
textInput.addEventListener('change', inputHandler)

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
        // console.log(div);

        document.querySelectorAll('.OuterText').forEach((item) => {
            item.addEventListener('click', () => {
                console.dir(item);
                item.style.color = 'blue'
                navigator.clipboard.writeText(item.textContent)
            })
        })
    }
  }