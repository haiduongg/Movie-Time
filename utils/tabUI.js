let $ = document.querySelector.bind(document);
let $$ = document.querySelectorAll.bind(document);

let tabs = $$('main .heading .tab h2');
let panes = $$('main article section');

tabs.forEach((tab, index) => {
  tab.onclick = function () {
    const pane = panes[index];

    $('main article section.active').classList.remove('active');
    $('main .heading .tab h2.tab-active').classList.remove('tab-active');

    tab.classList.add('tab-active');
    pane.classList.add('active');
  };
});
