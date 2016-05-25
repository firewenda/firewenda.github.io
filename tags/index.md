---
layout: home
---

<div class="index-content tag">
    <div class="section">
        <ul class="artical-cate">
            <li><a href="/blog"><span>Blog</span></a></li>
            <li><a href="/life"><span>life</span></a></li>
            <li><a href="/project"><span>Project</span></a></li>
            <li class="on"><a href="/tags"><span>Tags</span></a></li>
        </ul>

        <div class="cate-bar"><span id="cateBar"></span></div>

        <div id='tag_cloud' class="tags">
            {% for tag in site.tags %}
            <a href="#{{ tag[0] }}" title="{{ tag[0] }}" rel="{{ tag[1].size }}">{{ tag[0] }}</a>
            {% endfor %}
        </div>

        {% for tag in site.tags %}
            <div class="one-tag-list">
                <span class="fa fa-tag listing-seperator" id="{{ tag[0] }}">
                    <span class="tag-text">{{ tag[0] }}</span>
                </span>
                {% for post in tag[1] %}
                  <!-- <li class="listing-item">
                  <time datetime="{{ post.date | date:"%Y-%m-%d" }}">{{ post.date | date:"%Y-%m-%d" }}</time>
                  <a href="{{ post.url }}" title="{{ post.title }}">{{ post.title }}</a>
                  </li> -->
                 <div class="post-preview">
                    <a href="{{ post.url | prepend: site.baseurl }}">
                        <h2 class="post-title">
                            {{ post.title }}
                        </h2>
                        {% if post.description %}
                        <h3 class="post-subtitle">
                            {{ post.description }}
                        </h3>
                        {% endif %}
                    </a>
                    <!-- <p class="post-meta">{{ post.date | date:"%Y-%m-%d" }}</p> -->
                </div>
                <hr>
                {% endfor %}
            </div>
            {% endfor %}
    </div>
</div>