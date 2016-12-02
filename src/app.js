import $ from 'jquery';
import Backbone from 'backbone';
import _ from 'underscore';
import Rolodex from 'app/collections/rolodex';
import RolodexView from 'app/views/rolodex_view';
import Contact from 'app/models/contact';
import ContactView from 'app/views/contact_view';
import Application from 'app/models/application';
import ApplicationView from 'app/views/application_view';



var contactList = [
  {
    name: 'Crispin Jockers',
    email: 'crispy@me.com',
    phone: '2062823396'
  }, {
    name: 'Royale King',
    email: 'royal@me.com',
    phone: '2062823200'
  }, {
    name: 'Chelsea Kennedy',
    email: 'chel@me.com',
    phone: '2062829980'
  },
  {
    name: 'Jihan Zencirli',
    email: 'witwijs@me.com',
    phone: '2062821212'
  }
];

$(document).ready(function() {
  //wave two
  // var rolodex = new Rolodex();
  // var rolodexView = new RolodexView({
  //   el: $('#contact-cards'),
  //   contactList: rawData
  // }),

  var cardView = new RolodexView({
    el: $('#contact-cards'),
    model: contactList
  });
  // var application = new Application(populateData);
  // var applicationView = new ApplicationView({
  //   el: $('#application'),
  //   model: application
  // });
  cardView.render();
  // rolodexView.render();
  // applicationView.render();
});
