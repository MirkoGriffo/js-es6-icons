
const icons = [{
    name: 'cat',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'crow',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'dog',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'dove',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'dragon',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'horse',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'hippo',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'fish',
    prefix: 'fa-',
    type: 'animal',
    family: 'fas',
},
{
    name: 'carrot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'apple-alt',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'lemon',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'pepper-hot',
    prefix: 'fa-',
    type: 'vegetable',
    family: 'fas',
},
{
    name: 'user-astronaut',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
},
{
    name: 'user-graduate',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
},
{
    name: 'user-ninja',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
},
{
    name: 'user-secret',
    prefix: 'fa-',
    type: 'user',
    family: 'fas',
},];

//Colori
const colors = [
    "#001858",
    "#8bd3dd",
    "#f582ae",

]


// Icon container
const container = document.querySelector(".icons");
console.log(container);

// 1 - Stampare icone a schermo
printIcons(icons, container);

// 2 - Stampare icone colorate
const coloredIcons = colorIcons(icons, colors);
printIcons(coloredIcons, container);


// 3 - Filtra icone
const select = document.querySelector("#type");
const types = getType(coloredIcons);
genOption(types, select);
select.addEventListener("change", () => {


    const selected = select.value;

    const filteredIcons = filterIcons(coloredIcons, selected);
    printIcons(filteredIcons, container);
});


/***** Funzioni ******/

//Stampa icone

function printIcons(icons, container) {
    let html = " ";
    icons.forEach((icon) => {
        const { family, prefix, name, color } = icon;
        html +=
            `<div class="icon p-20">
        <i class="${family} ${prefix}${name}" 
            style="color:${color}"></i>
        <div class="title">${name}</div>
</div>`;
    });
    console.log(html);
    container.innerHTML = html;
}

//Colora icone

function colorIcons(icons, colors) {
    const types = getType(icons)
    console.log(types);
    console.log(colors);


    // Assegna colore per ogni tipo di icona

    const coloredIcons = icons.map((icon) => {
        const indexType = types.indexOf(icon.type);
        return {
            ...icon,
            color: colors[indexType],
        }
    });

    return coloredIcons;
}
//Ottieni tipo icona

function getType(icons) {
    const types = [];
    icons.forEach((icon) => {

        if (!types.includes(icon.type)) {
            types.push(icon.type);
        }
    });

    return types;
}

//genOption

function genOption(types, select) {

    let options = "";
    types.forEach((type) => {
        options += ` <option value="${type}">${type}</option>`
    });

    select.innerHTML += options;
}

//Filtra icone

function filterIcons(icons, selected) {

    if (selected === "all") {
        return icons;
    }

    const filtered = icons.filter((icon) => {

        return icon.type === selected;
    });

    return filtered;
}