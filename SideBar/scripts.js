const btnShowSidebar = document.querySelector('.sidebar-toggle');
const btnCloseSidebar = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');


btnShowSidebar.addEventListener('click', function(){
    sidebar.classList.add('show-sidebar');
});

btnCloseSidebar.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar');
});