var ppt_num = 5,
    marked = require('marked');

function initViews(app){
    app.engine('.html', require('ejs').__express);
    app.set('views', __dirname + "/views");
    app.set('view engine', 'html');
}
module.exports = function(req, res, app){
    initViews(app);
    if(req.method == "GET"){
        res.render('upload', {
            ppt_num : ppt_num
        });
    }else if(req.method == "POST"){
        var sections = [];
        for(var i=1; i<=ppt_num; i++){
            if(req.files['pptFile'+i].name != '' && req.files['pptFile'+i].size > ''){
                var file_path = req.files['pptFile'+i].path,
                    content = fis.util.read(file_path),
                    html_content = marked(content);

                sections.push(html_content);
            }
        }
        res.render('index', {
            sections : sections
        });
    }
};