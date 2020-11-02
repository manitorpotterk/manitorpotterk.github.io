---
title: Machine
type: page
layout: page
# The About page
# v2.0
# https://github.com/cotes2020/jekyll-theme-chirpy
# © 2017-2019 Cotes Chung
# MIT License
---

{% assign pinned = site.posts | where_exp: "item", "item.new == box"  %}
{% assign default = site.posts | where_exp: "item", "item.new != true"  %}
{% assign posts = "" | split: "" %}

<!-- Get pinned posts -->

{% assign offset = paginator.page | minus: 1 | times: paginator.per_page %}
{% assign pinned_num = pinned.size | minus: offset %}

{% if pinned_num > 0 %}
  {% for i in (offset..pinned.size) limit: pinned_num %}
    {% assign posts = posts | push: pinned[i] %}
  {% endfor %}
{% else %}
  {% assign pinned_num = 0 %}
{% endif %}


<!-- Get default posts -->

{% assign default_beg = offset | minus: pinned.size %}

{% if default_beg < 0 %}
  {% assign default_beg = 0 %}
{% endif %}

{% assign default_num = paginator.posts | size | minus: pinned_num  %}
{% assign default_end = default_beg | plus: default_num | minus: 1 %}

{% if default_num > 0 %}
  {% for i in (default_beg..default_end) %}
    {% assign posts = posts | push: default[i] %}
  {% endfor %}
{% endif %}


<div id="post-list">

{% for post in posts %}

  <div class="post-preview">
    <div class="d-flex justify-content-between pr-xl-2">
      <h1><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h1>
    </div>
  <div class="page-cover-image">
        <img class="page-image" src="https://manitorpotterk.github.io/assets/img/sample/devices-mockup.png" alt="{{page.title}}">
        <img src={{ https://manitorpotterk.github.io | append : post.image }} alt="text that you wants to add" width="500" height="600">
    </div>
    <div class="post-content">
      <p>
        {% include no-linenos.html content=post.content %}
        {{ content | markdownify | strip_html | truncate: 200 }}
      </p>
    </div>
    <div class="post-meta text-muted">
      <!-- posted date -->
      <i class="far fa-clock fa-fw"></i>
      {% include timeago.html date=post.date tooltip=true %}
      <!-- page views -->
      {% if site.google_analytics.pv.enabled %}
      <i class="far fa-eye fa-fw"></i>
      <span id="pv_{{-post.title-}}" class="pageviews">
        <i class="fas fa-spinner fa-spin fa-fw"></i>
      </span>
      {% endif %}
    </div>
  </div> <!-- .post-review -->

{% endfor %}

</div> <!-- #post-list -->

{% if paginator.total_pages > 0 %}
  {% include post-paginator.html %}
{% endif %}
