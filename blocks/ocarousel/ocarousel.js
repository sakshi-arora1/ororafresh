export default function decorate(block) {
    const carouselItems = [...block.children];
    const carouselList = document.createElement("ul");
    const createCarouselListItem = function (carouselItem) {
        const headingElement = carouselItem.querySelector('h2');
        const listItem = document.createElement("li");
        const anchorLink = document.createElement("a");
        anchorLink.setAttribute("href", "#" + headingElement.id);
        listItem.append(anchorLink);
        carouselList.append(listItem);
    };

    carouselItems.forEach(createCarouselListItem);
    carouselList.classList.add("ocarousel_nav");
    block.insertAdjacentElement("afterend", carouselList);
}