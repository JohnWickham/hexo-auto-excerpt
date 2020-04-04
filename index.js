const htmlToText = require('html-to-text');
(function(){
    const sanitize = function (post) {
        const content = htmlToText.fromString(
            post,
            {
                ignoreImage: true,
                ignoreHref: true,
                wordwrap: false,
                uppercaseHeadings: false
            }
        );
        return content;
    }

    hexo.extend.filter.register('after_post_render', function (data) {
        const excerptLength = hexo.config.excerpt_length || 300;
        const post = sanitize(data.content);
        const excerpt = post.replace(/^(.{excerptLength}[^\s]*).*/, "$1");
        data.excerpt = excerpt;
        return data;
    });
})();
