Falmouth UI Library
===================

For further details and examples [head over to the website](http://ucfalmouth.github.io/fu-ui/)

Why are we doing it? Mailchimp's UX team explain [why they do it](https://ux.mailchimp.com/patterns).

## Built upon awesome microframeworks

We're not building everything from scratch just pulling together the best of whats available...

[Toast by Dan Eden](http://daneden.github.io/Toast/)

[Sassline by Jake Giltsoff](http://sassline.com/)

[Bootstrap sass](https://github.com/twbs/bootstrap-sass)
We will probably end up creating a fork of this using silent classes to minimse code bloat, reducing technical debt via @extend and %placeholder, [see this](https://coderwall.com/p/wixovg)

## A decoupled semantic framework

When using frameworks such as Twitter Bootstrap or Zurb Foundation, [markup tends to be highly verbose and is coupled tightly to the framework itself.](https://coderwall.com/p/wixovg).

This has led to many developers to turn to SASS as a means to decouple the markup, and to use semantic naming conventions such as BEM, 
[allowing for more maintainable and readable css](http://www.integralist.co.uk/posts/maintainable-css-with-bem/).

However, it is known that using SASS to extend Bootstrap framework classes, for example, can lead to unnecesarily large files css files, as explained in [this article](http://thesassway.com/editorial/sass-doesnt-create-bad-code-bad-coders-do).

This framework will be a fresh approach to sass frameworks by providing silent sass classes and mixins, together with a focus on BEM naming conventions to bring the best of both css frameworks and future maintainability.
