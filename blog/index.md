---
layout: home
---

<div class="index-content blog">
    <div class="section">
        <ul class="artical-cate">
            <li class="on"><a href="/blog"><span>Blog</span></a></li>
            <li><a href="/life"><span>life</span></a></li>
            <li><a href="/project"><span>Project</span></a></li>
            <li><a href="/tags"><span>Tags</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.blog %}
            <li>
                <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
                <div class="title-desc">{{ post.description }}</div>
                <!--<span class="date">{{ post.date | date_to_string }}</span>
                <p>{% if post.excerpt.size > 100 %}{{ post.excerpt }}{% else %}{{ post.content | strip_html | strip_newlines | truncate: 160 }}{% endif %}</p>
                <div class="post-more-link text-center">
                    <a class="btn" href="{{ post.url }}">
                      阅读全文 »
                    </a>
                </div>-->
            </li>
        {% endfor %}
        </ul>
    </div>
    <div class="aside">
    </div>
</div>
