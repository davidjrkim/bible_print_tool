// Select the element by its ID
let container = document.getElementById("main");
const numberOfCell = 10;

const byteSize = (str) => new Blob([str]).size;

function reloadButton() {
    let bible = document.getElementById("bible");

    let firstTitle = bible.elements["firstTitle"].value;
    let firstVerse = bible.elements["firstVerse"].value;
    let secondTitle = bible.elements["secondTitle"].value;
    let secondVerse = bible.elements["secondVerse"].value;

    let verseByteSize = byteSize(firstVerse + secondVerse);
    console.log(verseByteSize);

    let pFontSize;

    switch (true) {
        case verseByteSize > 600:
            console.log("600");
            pFontSize = "0.6em";
            break;
        case verseByteSize > 550:
            console.log("550");
            pFontSize = "0.64em";
            break;
        case verseByteSize > 500:
            console.log("500");
            pFontSize = "0.66em";
            break;
        case verseByteSize > 450:
            console.log("450");
            pFontSize = "0.7em";
            break;
        case verseByteSize > 400:
            console.log("400");
            pFontSize = "0.74em";
            break;
        case verseByteSize > 350:
            console.log("350");
            pFontSize = "0.77em";
            break;
        case verseByteSize > 300:
            console.log("300");
            pFontSize = "0.81em";
            break;
        case verseByteSize > 250:
            console.log("250");
            pFontSize = "0.87em";
            break;
        case verseByteSize > 200:
            console.log("200");
            pFontSize = "0.94em";
            break;
        case verseByteSize > 150:
            console.log("150");
            pFontSize = "1em";
            break;
        case verseByteSize > 100:
            console.log("100");
            pFontSize = "1.15em";
            break;
        case verseByteSize > 0:
            console.log("100");
            pFontSize = "1.15em";
            break;
    }

    // Check if the element exists
    if (container) {
        // Iterate over child elements
        for (let i = 0; i < numberOfCell; i++) {
            // first child container node
            const firstChild = document.createElement("div");
            firstChild.classList.add('first_child');
            // second child container node
            const styleChild = document.createElement("div");
            styleChild.classList.add('style_child');
            
            const firstTitleH1 = document.createElement("h1");
            firstTitleH1.appendChild(document.createTextNode(firstTitle))

            const firstVerseP = document.createElement("p");
            firstVerseP.appendChild(document.createTextNode(firstVerse))
            firstVerseP.classList.add('p_style');
            firstVerseP.style.fontSize = pFontSize;

            const secondTitleH1 = document.createElement("h1");
            secondTitleH1.appendChild(document.createTextNode(secondTitle))

            const secondVerseP = document.createElement("p");
            secondVerseP.appendChild(document.createTextNode(secondVerse))
            secondVerseP.classList.add('p_style');
            secondVerseP.style.fontSize = pFontSize;

            styleChild.appendChild(firstTitleH1)
            styleChild.appendChild(firstVerseP)
            styleChild.appendChild(secondTitleH1)
            styleChild.appendChild(secondVerseP)
            firstChild.appendChild(styleChild)
            container.appendChild(firstChild)
            // firstChild.appendChild(`<div class="style_child"><h1>${firstTitle}</h1><p class="p_style" style="font-size: ${pFontSize}">${firstVerse}</p><h1>${secondTitle}</h1><p class="p_style" style="font-size: ${pFontSize}">${secondVerse}</p></div>`)
        }
    }
}
