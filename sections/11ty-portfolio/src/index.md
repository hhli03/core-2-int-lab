---
title: Testing a template layout
layout: base.njk
---

## some title here

{% for page in collections.pages %}
  - [{{ page.data.title }}]({{ page.url }})
{%- endfor %}

{% for page in collections.tests %}
  - [{{ test.data.title }}]({{ test.url }})
{%- endfor %}


As a species, creativity will always live on the border of our understanding. Despite how lavishly our culture rewards those capable of tapping into their creative faculties, we still have minimal comprehension of what governs creativity and how to quantify it. Any class that you take on creativity will only offer ideas and suggestions designed to inspire creative thought, but there's no concrete evidence to support that the tactics and techniques employed are effective for everyone. In short, we need to develop creative solutions to help us understand how creativity works.

Since creativity exists in such a nebulous sphere of human understanding, the only people qualified to delve into the intricacies of such an ineffable concept are those that make a living off creativity. In the video linked above, the creative mastermind behind some of the 20th century's most significant musical acts, Rick Rubin, sits down to discuss why he believes that creativity thrives best under restriction.