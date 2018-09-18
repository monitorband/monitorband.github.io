window.location.hash = "monitortheband";

var viewModel = {
  templates: ['#monitortheband', '#performances', '#propaganda'],
  currentTemplate: ko.observable(window.location.hash),
  // to-do: store performances on back end, and request with AJAX
  performances: [],
  propaganda: ['this link', 'that link'],
  openPage: function(pageClicked) {
    window.location.hash = viewModel.templates[pageClicked];
  },
  navBarLarge: ko.observable(window.innerWidth > 640 ? true : false),
  dropDownActive: ko.observable(false),
  dropDownToggle: function() {
    viewModel.dropDownActive(!viewModel.dropDownActive());
  }
};

$(window).on('hashchange', function() {
  viewModel.currentTemplate(window.location.hash);
  viewModel.dropDownActive(false);
});

$(window).on('resize', function() {
  viewModel.navBarLarge(window.innerWidth > 640 ? true : false);
});