'use strict';

/*
* Require the path module
*/
const path = require('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Give your project a title.
 */
fractal.set('project.title', 'Business View Requirements');

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set('path', path.join(__dirname, 'docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set('static.path', path.join(__dirname, 'public'));

/*
 * Tell the Fractal where the output static files should live.
 */
fractal.web.set('builder.dest', __dirname + '/build');


/*
 * Set custom statuses for docs
 */
fractal.docs.set('default.status', 'draft');

fractal.docs.set('statuses', {
    draft: {
        label: 'Draft',
        description: 'Work in progress.',
        color: '#FF3333'
    },
    review: {
        label: 'Review',
        description: 'Ready for review.',
        color: '#FF9233'
    },
    approved: {
        label: 'Approved',
        description: 'Approved for referencing.',
        color: '#710071'
    },
    depreciated: {
        label: 'Depreciated',
        description: 'Parking lot-ed.',
        color: '#CCCCCC'
    },
    'ready for development': {
        label: 'Ready for Development',
        description: 'Ready for Development.',
        color: '#29CC29'
    },
    'in development': {
        label: 'In Development',
        description: 'In Development.',
        color: '#3650FF'
    },
    'in testing': {
        label: 'In Testing',
        description: 'In Testing.',
        color: '#C48F65'
    },
    completed: {
        label: 'Completed',
        description: 'Completed.',
        color: '#CE3175'
    },
    blocked: {
        label: 'Blocked',
        description: 'Blocked.',
        color: '#000000'
    },
    'in progress': {
        label: 'Discovery In progress',
        description: 'Discovery In progress.',
        color: '#20B2AA'
    },
    'UAT': {
        label: 'In UAT',
        description: 'In UAT.',
        color: '#e6e600'
    }
});

/*
 * Turn on browser sync options
 */
fractal.web.set('server.syncOptions', {
    open: true,
    browser: ['firefox'],
    notify: true
});

/**
 * Add helper for building full documentation page
 */
const hbs = require('@frctl/handlebars')({
    helpers: {
        allDocs: function() {
            const options = Array.from(arguments).pop();
            let ret = '';
            for (let doc of fractal.docs.flatten()) {
                if (doc.content && doc.title !== "Complete Documentation") {
                    ret += options.fn(doc.toJSON());
                    if (doc.config.status) {
                        let bgColor;
                        let label = '';
                        if (doc.config.status === "review") {
                            bgColor = '#FF9233';
                        }
                        else if (doc.config.status === "depreciated") {
                            bgColor = '#CCCCCC';
                        }
                        else if (doc.config.status === "draft") {
                            bgColor = '#FF3333';
                        }
                        else if (doc.config.status === "approved") {
                            bgColor = '#29CC29';
                        }
                        label += '<label class="Status-label" style="background-color: ' +
                                        bgColor + '; border-color: ' + bgColor + ';">' + doc.config.status + '</label>';
                    }
                    ret += doc.content;
                }
            }
            return ret;
        }
    }
});
fractal.docs.engine(hbs);
