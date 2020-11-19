const path = require('path');
const data = require('./src/submissions/submissions.json');

exports.createPages = ({actions}) => {
    const {createPage} = actions;
    
    const template = path.resolve('./src/templates/student.js');

    data.forEach(student => {
        let path = student.name.slice().replace(' ', '-').toLowerCase();
        createPage({
            path,
            component: template,
            context: student,
        });
    });
};