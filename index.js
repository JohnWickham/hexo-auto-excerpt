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

        if (data.excerpt.length > 0) {
            return data;
        }

        const excerptLength = hexo.config.excerpt_length || 30;
        const post = sanitize(data.content);
        const excerpt = post.split(" ").splice(0, excerptLength).join(" ");
        data.excerpt = excerpt + "…";
        return data;
    });
})();
