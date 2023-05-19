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
    const handleCarouselItemFocus = function (carouselItem) {
        const headingElement = carouselItem.querySelector('h2');
        const carouselList = block.parentElement.querySelector(".herocarousel_nav");
        const anchorLink = carouselList.querySelector('[href="#' + headingElement.id + '"]');
        if (block.scrollLeft == carouselItem.offsetLeft) {
            carouselItem.setAttribute("aria-selected", true);
            anchorLink.setAttribute("aria-selected", true);
            anchorLink.classList.add("active");
        } else {
            carouselItem.setAttribute("aria-selected", false);
            anchorLink.setAttribute("aria-selected", false);
            anchorLink.classList.remove("active");
        }
    };
    const handleScroll = function (event) {
        carouselItems.forEach(handleCarouselItemFocus);
    };

    carouselItems.forEach(createCarouselListItem);
    carouselList.classList.add("herocarousel_nav");
    block.insertAdjacentElement("afterend", carouselList);
    block.onscroll = handleScroll;
    //for setting attributes on initial load
    handleCarouselItemFocus(carouselItems[0]);
}