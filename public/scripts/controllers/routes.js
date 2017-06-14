'use strict';
var app = app || {};

page('/', app.articleController.index);
page('/about', app.aboutController.index);
page('*', () => $( 'body' ).text( '404 NOT FOUND' ));

page();