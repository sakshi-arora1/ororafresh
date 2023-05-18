export default function decorate(block) {
    const bottom_border = document.createElement("div");
    bottom_border.classList.add("oheading_bottom_border");
    block.append(bottom_border);
}