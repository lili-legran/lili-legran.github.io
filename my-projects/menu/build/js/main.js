"use strict";

var searchIcon = document.querySelector('.menu-header__icons-search');
var searchContainer = document.querySelector('.menu-header__search');

var searchBarActivation = function searchBarActivation() {
  searchIcon.classList.add('menu-header__search-close-icon');
  searchIcon.src = 'assets/close.svg';
  searchContainer.classList.remove('menu-header__search-hidden');
  searchContainer.style.zIndex = '1';
  searchIcon.addEventListener('click', closeSearchBar);
  searchIcon.removeEventListener('click', searchBarActivation);
};

var closeSearchBar = function closeSearchBar() {
  searchIcon.classList.remove('menu-header__search-close-icon');
  searchIcon.src = 'assets/search.svg';
  searchContainer.classList.add('menu-header__search-hidden');
  searchIcon.addEventListener('click', searchBarActivation);
};

searchIcon.addEventListener('click', searchBarActivation);
var menuContainer = document.querySelector('.menu');

var showMenu = function showMenu() {
  menuContainer.classList.toggle('menu-hidden');
  closeSearchBar();
};

document.querySelector('.icon-menu').addEventListener('click', showMenu);
document.querySelector('.menu-header__icons-arrow').addEventListener('click', showMenu);
var langArrow = document.querySelector('.menu-header__row-arrow');
var hiddenLanguages = document.querySelectorAll('.menu-header__hidden-row');

var toggleLanguagesList = function toggleLanguagesList() {
  hiddenLanguages.forEach(function (language) {
    return language.classList.toggle('menu-header__hidden-row');
  });
  langArrow.classList.toggle('menu-header__row-rotate-arrow');
};

var hideLanguagesList = function hideLanguagesList() {
  hiddenLanguages.forEach(function (language) {
    return language.classList.add('menu-header__hidden-row');
  });
  langArrow.classList.remove('menu-header__row-rotate-arrow');
};

var languages = {
  'RU': 'assets/flag-ru.svg',
  'EN': 'assets/flag-en.svg',
  'BE': 'assets/flag-be.svg'
};
var langArray = Object.keys(languages);
var languagesArray = document.querySelector('.menu-header__main');
var chosenLanguages = document.querySelector('.menu-header__row-lang_arrow');
var langHeaderArray = document.querySelectorAll('.menu-header__row-lang');
var selectLang = document.querySelectorAll('.menu-header__row')[0];
selectLang.addEventListener('click', toggleLanguagesList);

var languageSelection = function languageSelection(e) {
  var langContainer = e.target.closest('.menu-header__row');
  var langValue = langContainer.querySelector('span').innerText;
  var filteredLanguages = langArray.filter(function (item) {
    return item !== langValue;
  });
  chosenLanguages.querySelector('span').innerText = langValue;
  chosenLanguages.querySelector('img').src = languages[langValue];

  for (var i = 1; i < langHeaderArray.length; i++) {
    langHeaderArray[i].querySelector('span').innerText = filteredLanguages[i - 1];
    langHeaderArray[i].querySelector('img').src = languages[filteredLanguages[i - 1]];
    langHeaderArray[i].parentNode.addEventListener('click', hideLanguagesList);
  }
};

languagesArray.addEventListener('click', languageSelection);
var externalMenu = document.querySelector('.menu-external');
var innerMenu = document.querySelector('.menu-inner');
var externalRows = document.querySelectorAll('.menu-body__row');

var moveInnerMenu = function moveInnerMenu(e) {
  var target = e.target;
  var targetValue = target.innerText;

  if (target.parentNode.querySelectorAll('.menu-body__row-image').length > 0) {
    document.querySelector('.menu-inner__selected_title').innerHTML = targetValue;
    innerMenu.style.right = "0";
  }
};

var closeAccordion = function closeAccordion() {
  document.querySelector('.menu-inner__lvl-3').classList.add('menu-inner__lvl-3_hidden');
};

var moveOutInnerMenu = function moveOutInnerMenu() {
  innerMenu.style.right = "-110%";
  closeAccordion();
};

document.querySelector('.menu-inner__selected').addEventListener('click', moveOutInnerMenu);
externalRows.forEach(function (el) {
  return el.addEventListener('click', moveInnerMenu);
});
externalMenu.addEventListener('click', closeSearchBar);

var toggleAccordion = function toggleAccordion() {
  document.querySelector('.menu-inner__lvl-3').classList.toggle('menu-inner__lvl-3_hidden');
};

var lvl2Items = document.querySelectorAll('.menu-inner__lvl-2_name');
lvl2Items.forEach(function (item) {
  var lvl3List = item.querySelectorAll('.menu-inner__lvl-3');

  if (lvl3List.length > 0) {
    var arrow = document.createElement('img');
    arrow.src = 'assets/down-arrow.svg';
    arrow.classList.add('menu-inner__lvl-3_arrow');
    var lvl2Title = item.querySelector('.menu-inner__lvl-2_title');
    lvl2Title.appendChild(arrow);
    lvl2Title.addEventListener('click', toggleAccordion);
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5qcyIsIm1haW4uanMiLCJzaG93LW1lbnUuanMiLCJsYW5ndWFnZXMuanMiXSwibmFtZXMiOlsic2VhcmNoSWNvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInNlYXJjaENvbnRhaW5lciIsInNlYXJjaEJhckFjdGl2YXRpb24iLCJjbGFzc0xpc3QiLCJhZGQiLCJzcmMiLCJyZW1vdmUiLCJzdHlsZSIsInpJbmRleCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbG9zZVNlYXJjaEJhciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJtZW51Q29udGFpbmVyIiwic2hvd01lbnUiLCJ0b2dnbGUiLCJsYW5nQXJyb3ciLCJoaWRkZW5MYW5ndWFnZXMiLCJxdWVyeVNlbGVjdG9yQWxsIiwidG9nZ2xlTGFuZ3VhZ2VzTGlzdCIsImZvckVhY2giLCJsYW5ndWFnZSIsImhpZGVMYW5ndWFnZXNMaXN0IiwibGFuZ3VhZ2VzIiwibGFuZ0FycmF5IiwiT2JqZWN0Iiwia2V5cyIsImxhbmd1YWdlc0FycmF5IiwiY2hvc2VuTGFuZ3VhZ2VzIiwibGFuZ0hlYWRlckFycmF5Iiwic2VsZWN0TGFuZyIsImxhbmd1YWdlU2VsZWN0aW9uIiwiZSIsImxhbmdDb250YWluZXIiLCJ0YXJnZXQiLCJjbG9zZXN0IiwibGFuZ1ZhbHVlIiwiaW5uZXJUZXh0IiwiZmlsdGVyZWRMYW5ndWFnZXMiLCJmaWx0ZXIiLCJpdGVtIiwiaSIsImxlbmd0aCIsInBhcmVudE5vZGUiLCJleHRlcm5hbE1lbnUiLCJpbm5lck1lbnUiLCJleHRlcm5hbFJvd3MiLCJtb3ZlSW5uZXJNZW51IiwidGFyZ2V0VmFsdWUiLCJpbm5lckhUTUwiLCJyaWdodCIsImNsb3NlQWNjb3JkaW9uIiwibW92ZU91dElubmVyTWVudSIsImVsIiwidG9nZ2xlQWNjb3JkaW9uIiwibHZsMkl0ZW1zIiwibHZsM0xpc3QiLCJhcnJvdyIsImNyZWF0ZUVsZW1lbnQiLCJsdmwyVGl0bGUiLCJhcHBlbmRDaGlsZCJdLCJt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IHNlYXJjaEljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1oZWFkZXJfX2ljb25zLXNlYXJjaCcpO1xyXG5jb25zdCBzZWFyY2hDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1oZWFkZXJfX3NlYXJjaCcpO1xyXG5cclxuY29uc3Qgc2VhcmNoQmFyQWN0aXZhdGlvbiA9ICgpID0+IHtcclxuICAgIHNlYXJjaEljb24uY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXJfX3NlYXJjaC1jbG9zZS1pY29uJyk7XHJcbiAgICBzZWFyY2hJY29uLnNyYyA9ICdhc3NldHMvY2xvc2Uuc3ZnJztcclxuXHJcbiAgICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1oZWFkZXJfX3NlYXJjaC1oaWRkZW4nKTtcclxuICAgIHNlYXJjaENvbnRhaW5lci5zdHlsZS56SW5kZXggPSAnMSc7XHJcblxyXG4gICAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU2VhcmNoQmFyKTtcclxuICAgIHNlYXJjaEljb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hCYXJBY3RpdmF0aW9uKTtcclxufVxyXG5cclxuY29uc3QgY2xvc2VTZWFyY2hCYXIgPSAoKSA9PiB7XHJcbiAgc2VhcmNoSWNvbi5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWhlYWRlcl9fc2VhcmNoLWNsb3NlLWljb24nKTtcclxuICBzZWFyY2hJY29uLnNyYyA9ICdhc3NldHMvc2VhcmNoLnN2Zyc7XHJcbiAgc2VhcmNoQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyX19zZWFyY2gtaGlkZGVuJyk7XHJcbiAgc2VhcmNoSWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaEJhckFjdGl2YXRpb24pO1xyXG59XHJcblxyXG5zZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoQmFyQWN0aXZhdGlvbik7IiwiY29uc3Qgc2VhcmNoSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWhlYWRlcl9faWNvbnMtc2VhcmNoJyk7XHJcbmNvbnN0IHNlYXJjaENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWhlYWRlcl9fc2VhcmNoJyk7XHJcblxyXG5jb25zdCBzZWFyY2hCYXJBY3RpdmF0aW9uID0gKCkgPT4ge1xyXG4gICAgc2VhcmNoSWNvbi5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcl9fc2VhcmNoLWNsb3NlLWljb24nKTtcclxuICAgIHNlYXJjaEljb24uc3JjID0gJ2Fzc2V0cy9jbG9zZS5zdmcnO1xyXG5cclxuICAgIHNlYXJjaENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWhlYWRlcl9fc2VhcmNoLWhpZGRlbicpO1xyXG4gICAgc2VhcmNoQ29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcxJztcclxuXHJcbiAgICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VTZWFyY2hCYXIpO1xyXG4gICAgc2VhcmNoSWNvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHNlYXJjaEJhckFjdGl2YXRpb24pO1xyXG59XHJcblxyXG5jb25zdCBjbG9zZVNlYXJjaEJhciA9ICgpID0+IHtcclxuICBzZWFyY2hJY29uLmNsYXNzTGlzdC5yZW1vdmUoJ21lbnUtaGVhZGVyX19zZWFyY2gtY2xvc2UtaWNvbicpO1xyXG4gIHNlYXJjaEljb24uc3JjID0gJ2Fzc2V0cy9zZWFyY2guc3ZnJztcclxuICBzZWFyY2hDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbWVudS1oZWFkZXJfX3NlYXJjaC1oaWRkZW4nKTtcclxuICBzZWFyY2hJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoQmFyQWN0aXZhdGlvbik7XHJcbn1cclxuXHJcbnNlYXJjaEljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hCYXJBY3RpdmF0aW9uKTtcclxuY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XHJcblxyXG5jb25zdCBzaG93TWVudSA9ICgpID0+IHtcclxuICBtZW51Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaGlkZGVuJyk7XHJcbiAgY2xvc2VTZWFyY2hCYXIoKTtcclxufVxyXG5cclxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmljb24tbWVudScpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd01lbnUpO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1oZWFkZXJfX2ljb25zLWFycm93JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XHJcblxyXG5jb25zdCBsYW5nQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1oZWFkZXJfX3Jvdy1hcnJvdycpO1xyXG5jb25zdCBoaWRkZW5MYW5ndWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1oZWFkZXJfX2hpZGRlbi1yb3cnKTtcclxuXHJcbmNvbnN0IHRvZ2dsZUxhbmd1YWdlc0xpc3QgPSAoKSA9PiB7XHJcbiAgaGlkZGVuTGFuZ3VhZ2VzLmZvckVhY2gobGFuZ3VhZ2UgPT4gbGFuZ3VhZ2UuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1oZWFkZXJfX2hpZGRlbi1yb3cnKSk7XHJcbiAgbGFuZ0Fycm93LmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaGVhZGVyX19yb3ctcm90YXRlLWFycm93Jyk7XHJcbn1cclxuXHJcbmNvbnN0IGhpZGVMYW5ndWFnZXNMaXN0ID0gKCkgPT4ge1xyXG4gIGhpZGRlbkxhbmd1YWdlcy5mb3JFYWNoKGxhbmd1YWdlID0+IGxhbmd1YWdlLmNsYXNzTGlzdC5hZGQoJ21lbnUtaGVhZGVyX19oaWRkZW4tcm93JykpO1xyXG4gIGxhbmdBcnJvdy5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LWhlYWRlcl9fcm93LXJvdGF0ZS1hcnJvdycpO1xyXG59XHJcblxyXG5jb25zdCBsYW5ndWFnZXMgPSB7XHJcbiAgJ1JVJzogJ2Fzc2V0cy9mbGFnLXJ1LnN2ZycsXHJcbiAgJ0VOJzogJ2Fzc2V0cy9mbGFnLWVuLnN2ZycsXHJcbiAgJ0JFJzogJ2Fzc2V0cy9mbGFnLWJlLnN2ZydcclxufTtcclxuY29uc3QgbGFuZ0FycmF5ID0gT2JqZWN0LmtleXMobGFuZ3VhZ2VzKTtcclxuY29uc3QgbGFuZ3VhZ2VzQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1oZWFkZXJfX21haW4nKTtcclxuY29uc3QgY2hvc2VuTGFuZ3VhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaGVhZGVyX19yb3ctbGFuZ19hcnJvdycpO1xyXG5jb25zdCBsYW5nSGVhZGVyQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1oZWFkZXJfX3Jvdy1sYW5nJyk7XHJcbmNvbnN0IHNlbGVjdExhbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1oZWFkZXJfX3JvdycpWzBdO1xyXG5cclxuc2VsZWN0TGFuZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZUxhbmd1YWdlc0xpc3QpO1xyXG5cclxuY29uc3QgbGFuZ3VhZ2VTZWxlY3Rpb24gPSAoZSkgPT4ge1xyXG4gIGNvbnN0IGxhbmdDb250YWluZXIgPSBlLnRhcmdldC5jbG9zZXN0KCcubWVudS1oZWFkZXJfX3JvdycpO1xyXG4gIGNvbnN0IGxhbmdWYWx1ZSA9IGxhbmdDb250YWluZXIucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVyVGV4dDtcclxuICBjb25zdCBmaWx0ZXJlZExhbmd1YWdlcyA9IGxhbmdBcnJheS5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSBsYW5nVmFsdWUpO1xyXG4gIGNob3Nlbkxhbmd1YWdlcy5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJUZXh0ID0gbGFuZ1ZhbHVlO1xyXG4gIGNob3Nlbkxhbmd1YWdlcy5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBsYW5ndWFnZXNbbGFuZ1ZhbHVlXTtcclxuICBmb3IgKGxldCBpID0gMTsgaSA8IGxhbmdIZWFkZXJBcnJheS5sZW5ndGg7IGkrKykge1xyXG4gICAgbGFuZ0hlYWRlckFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lclRleHQgPSBmaWx0ZXJlZExhbmd1YWdlc1tpLTFdO1xyXG4gICAgbGFuZ0hlYWRlckFycmF5W2ldLnF1ZXJ5U2VsZWN0b3IoJ2ltZycpLnNyYyA9IGxhbmd1YWdlc1tmaWx0ZXJlZExhbmd1YWdlc1tpLTFdXTtcclxuICAgIGxhbmdIZWFkZXJBcnJheVtpXS5wYXJlbnROb2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZUxhbmd1YWdlc0xpc3QpO1xyXG4gIH1cclxufVxyXG5cclxubGFuZ3VhZ2VzQXJyYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBsYW5ndWFnZVNlbGVjdGlvbik7XHJcbmNvbnN0IGV4dGVybmFsTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWV4dGVybmFsJyk7XHJcbmNvbnN0IGlubmVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWlubmVyJyk7XHJcbmNvbnN0IGV4dGVybmFsUm93cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5tZW51LWJvZHlfX3JvdycpO1xyXG5cclxuY29uc3QgbW92ZUlubmVyTWVudSA9IChlKSA9PiB7XHJcbiAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xyXG4gIGxldCB0YXJnZXRWYWx1ZSA9IHRhcmdldC5pbm5lclRleHQ7XHJcblxyXG4gIGlmICh0YXJnZXQucGFyZW50Tm9kZS5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1ib2R5X19yb3ctaW1hZ2UnKS5sZW5ndGggPiAwKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pbm5lcl9fc2VsZWN0ZWRfdGl0bGUnKS5pbm5lckhUTUwgPSB0YXJnZXRWYWx1ZTtcclxuICAgIGlubmVyTWVudS5zdHlsZS5yaWdodCA9IFwiMFwiO1xyXG4gIH0gXHJcbn1cclxuXHJcbmNvbnN0IGNsb3NlQWNjb3JkaW9uID0gKCkgPT4ge1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWlubmVyX19sdmwtMycpLmNsYXNzTGlzdC5hZGQoJ21lbnUtaW5uZXJfX2x2bC0zX2hpZGRlbicpO1xyXG59XHJcblxyXG5jb25zdCBtb3ZlT3V0SW5uZXJNZW51ID0gKCkgPT4ge1xyXG4gIGlubmVyTWVudS5zdHlsZS5yaWdodCA9IFwiLTExMCVcIjtcclxuICBjbG9zZUFjY29yZGlvbigpO1xyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pbm5lcl9fc2VsZWN0ZWQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVPdXRJbm5lck1lbnUpO1xyXG5leHRlcm5hbFJvd3MuZm9yRWFjaChlbCA9PiBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1vdmVJbm5lck1lbnUpKTtcclxuXHJcbmV4dGVybmFsTWVudS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlU2VhcmNoQmFyKTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5jb25zdCB0b2dnbGVBY2NvcmRpb24gPSAoKSA9PiB7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaW5uZXJfX2x2bC0zJykuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pbm5lcl9fbHZsLTNfaGlkZGVuJyk7XHJcbn1cclxuXHJcblxyXG5jb25zdCBsdmwySXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubWVudS1pbm5lcl9fbHZsLTJfbmFtZScpO1xyXG5sdmwySXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICBjb25zdCBsdmwzTGlzdCA9IGl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaW5uZXJfX2x2bC0zJyk7XHJcbiAgaWYgKGx2bDNMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgIGxldCBhcnJvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgYXJyb3cuc3JjID0gJ2Fzc2V0cy9kb3duLWFycm93LnN2Zyc7XHJcbiAgICBhcnJvdy5jbGFzc0xpc3QuYWRkKCdtZW51LWlubmVyX19sdmwtM19hcnJvdycpO1xyXG4gICAgY29uc3QgbHZsMlRpdGxlID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcubWVudS1pbm5lcl9fbHZsLTJfdGl0bGUnKTtcclxuICAgIGx2bDJUaXRsZS5hcHBlbmRDaGlsZChhcnJvdyk7XHJcbiAgICBsdmwyVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVBY2NvcmRpb24pO1xyXG4gIH1cclxufSkiLCJjb25zdCBtZW51Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKTtcclxuXHJcbmNvbnN0IHNob3dNZW51ID0gKCkgPT4ge1xyXG4gIG1lbnVDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1oaWRkZW4nKTtcclxuICBjbG9zZVNlYXJjaEJhcigpO1xyXG59XHJcblxyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaWNvbi1tZW51JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TWVudSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWhlYWRlcl9faWNvbnMtYXJyb3cnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNZW51KTtcclxuIiwiY29uc3QgbGFuZ0Fycm93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaGVhZGVyX19yb3ctYXJyb3cnKTtcclxuY29uc3QgaGlkZGVuTGFuZ3VhZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaGVhZGVyX19oaWRkZW4tcm93Jyk7XHJcblxyXG5jb25zdCB0b2dnbGVMYW5ndWFnZXNMaXN0ID0gKCkgPT4ge1xyXG4gIGhpZGRlbkxhbmd1YWdlcy5mb3JFYWNoKGxhbmd1YWdlID0+IGxhbmd1YWdlLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaGVhZGVyX19oaWRkZW4tcm93JykpO1xyXG4gIGxhbmdBcnJvdy5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWhlYWRlcl9fcm93LXJvdGF0ZS1hcnJvdycpO1xyXG59XHJcblxyXG5jb25zdCBoaWRlTGFuZ3VhZ2VzTGlzdCA9ICgpID0+IHtcclxuICBoaWRkZW5MYW5ndWFnZXMuZm9yRWFjaChsYW5ndWFnZSA9PiBsYW5ndWFnZS5jbGFzc0xpc3QuYWRkKCdtZW51LWhlYWRlcl9faGlkZGVuLXJvdycpKTtcclxuICBsYW5nQXJyb3cuY2xhc3NMaXN0LnJlbW92ZSgnbWVudS1oZWFkZXJfX3Jvdy1yb3RhdGUtYXJyb3cnKTtcclxufVxyXG5cclxuY29uc3QgbGFuZ3VhZ2VzID0ge1xyXG4gICdSVSc6ICdhc3NldHMvZmxhZy1ydS5zdmcnLFxyXG4gICdFTic6ICdhc3NldHMvZmxhZy1lbi5zdmcnLFxyXG4gICdCRSc6ICdhc3NldHMvZmxhZy1iZS5zdmcnXHJcbn07XHJcbmNvbnN0IGxhbmdBcnJheSA9IE9iamVjdC5rZXlzKGxhbmd1YWdlcyk7XHJcbmNvbnN0IGxhbmd1YWdlc0FycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaGVhZGVyX19tYWluJyk7XHJcbmNvbnN0IGNob3Nlbkxhbmd1YWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWhlYWRlcl9fcm93LWxhbmdfYXJyb3cnKTtcclxuY29uc3QgbGFuZ0hlYWRlckFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaGVhZGVyX19yb3ctbGFuZycpO1xyXG5jb25zdCBzZWxlY3RMYW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1lbnUtaGVhZGVyX19yb3cnKVswXTtcclxuXHJcbnNlbGVjdExhbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVMYW5ndWFnZXNMaXN0KTtcclxuXHJcbmNvbnN0IGxhbmd1YWdlU2VsZWN0aW9uID0gKGUpID0+IHtcclxuICBjb25zdCBsYW5nQ29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdCgnLm1lbnUtaGVhZGVyX19yb3cnKTtcclxuICBjb25zdCBsYW5nVmFsdWUgPSBsYW5nQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5pbm5lclRleHQ7XHJcbiAgY29uc3QgZmlsdGVyZWRMYW5ndWFnZXMgPSBsYW5nQXJyYXkuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gbGFuZ1ZhbHVlKTtcclxuICBjaG9zZW5MYW5ndWFnZXMucXVlcnlTZWxlY3Rvcignc3BhbicpLmlubmVyVGV4dCA9IGxhbmdWYWx1ZTtcclxuICBjaG9zZW5MYW5ndWFnZXMucXVlcnlTZWxlY3RvcignaW1nJykuc3JjID0gbGFuZ3VhZ2VzW2xhbmdWYWx1ZV07XHJcbiAgZm9yIChsZXQgaSA9IDE7IGkgPCBsYW5nSGVhZGVyQXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgIGxhbmdIZWFkZXJBcnJheVtpXS5xdWVyeVNlbGVjdG9yKCdzcGFuJykuaW5uZXJUZXh0ID0gZmlsdGVyZWRMYW5ndWFnZXNbaS0xXTtcclxuICAgIGxhbmdIZWFkZXJBcnJheVtpXS5xdWVyeVNlbGVjdG9yKCdpbWcnKS5zcmMgPSBsYW5ndWFnZXNbZmlsdGVyZWRMYW5ndWFnZXNbaS0xXV07XHJcbiAgICBsYW5nSGVhZGVyQXJyYXlbaV0ucGFyZW50Tm9kZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVMYW5ndWFnZXNMaXN0KTtcclxuICB9XHJcbn1cclxuXHJcbmxhbmd1YWdlc0FycmF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbGFuZ3VhZ2VTZWxlY3Rpb24pOyJdfQ==