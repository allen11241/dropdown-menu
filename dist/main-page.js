const NUM_DROPDOWN_ITEMS = 3;
const NUM_NAV_ITEMS = 5;

function createDropdownMenu() {
    const container = document.querySelector('.content')
    container.appendChild(createHeader());
    container.appendChild(createNavBar());
    container.appendChild(createBody());
    container.appendChild(createFooter());
}

function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.textContent = 'header';
    return header;
}

function createNavBar() {
    const navBar = document.createElement('div');
    navBar.classList.add('nav-bar');
    for(let i=0; i < NUM_NAV_ITEMS; i++) {
        navBar.appendChild(createNavItem(i))
    }
    navBar.appendChild(createMenuIcon());
    return navBar;
}

function createBody() {
    const body = document.createElement('div');
    body.classList.add('body');
    body.textContent = 'body';
    body.appendChild(createParagraph());
    return body;
}

function createFooter() {
    const footer = document.createElement('div');
    footer.classList.add('footer');
    footer.textContent = 'footer';
    return footer;
}

function createNavItem(number) {
    const item = document.createElement('div');
    item.classList.add('nav-item');
    item.textContent = 'item ' + number;
    item.appendChild(createDropdownContent());
    return item;
}

function createDropdownContent() {
    const dropdownContent = document.createElement('div');
    dropdownContent.classList.add('dropdown-content');
    for(let i=0; i < NUM_DROPDOWN_ITEMS; i++) {
        dropdownContent.appendChild(createDropdownItem(i));
    }
    return dropdownContent;
}

function createMenuIcon() {
    const icon = document.createElement('a');
    icon.href = '#';
    icon.classList.add('menu-icon');
    icon.addEventListener('click', function() {
        alert('click')
    })
    return icon;
}

function createDropdownItem(number) {
    const dropdownItem = document.createElement('a');
    dropdownItem.href = '#';
    dropdownItem.textContent = 'sub-item ' + number;
    return dropdownItem;
}

function createParagraph() {
    const p = document.createElement('div');
    p.classList.add('p');
    p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    return p;
}

export default createDropdownMenu;