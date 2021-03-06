/*	Author:		Kyle Foreman (kforeman@post.harvard.edu)
	Date:		3 January 2012
	Purpose:	Create basic 3 section layout for GBD tool
*/

// parameters for layout
	var menu_width = 250,
		content_width = 750,
		height = 750,
		bg = '#ffffff',
		content_buffer = 5;

// add the lefthand menu
	body = d3.select('body');
	menu = body.append('div')
		.attr('id', 'menu')
		.style('width', menu_width + 'px')
		.style('height', (height + 3) + 'px')
		.style('background-color', bg);

// title
	title = body.append('div')
		.style('width', menu_width + 'px')
		.attr('id', 'title');
	
	title.append('div')
		.attr('class', 'logo');

// add the righthand content section
	content = body.append('div')
		.attr('id', 'content')
		.style('padding-left', menu_width + 'px')
		.style('width', content_width + 'px')
		.style('height', height + 'px')
		.style('background-color', bg);

// split the content section into two pieces
	A = content.append('div')
		.style('height', (height / 2 + content_buffer) + 'px')
	  .append('svg')
		.attr('id', 'A')
		.style('height', (height / 2) + 'px')
		.style('width', content_width + 'px')
		.style('background-color', bg);
	B = content.append('div')
		.style('height', (height / 2 + content_buffer) + 'px')
	  .append('svg')
		.attr('id', 'B')
		.style('height', (height / 2) + 'px')
		.style('width', content_width + 'px')
		.style('background-color', bg);
