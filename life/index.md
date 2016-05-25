---
layout: home
---

<div class="index-content life">
    <div class="section">
        <ul class="artical-cate">
            <li><a href="/blog"><span>Blog</span></a></li>
            <li class="on"><a href="/life"><span>life</span></a></li>
            <li><a href="/project"><span>Project</span></a></li>
            <li><a href="/tags"><span>Tags</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <ul class="artical-list">
        {% for post in site.categories.life %}
            <li>
                <h2>
                    <a href="{{ post.url }}">{{ post.title }}</a>
                </h2>
                <div class="title-desc">{{ post.description }}</div>
                <hr>
            </li>
        {% endfor %}
        </ul>
    </div>
</div>
