# [18plate](http://www.iliadraznin.com/lab/18plate/)
## A Responsive Front-End Template and CSS Grid

18plate uses a fluid responsive grid, makes use of jQuery and Modernizr, and scales well from 1800px wide all the way to mobile screens.

### Fast

I love front-end frameworks such as HTML5 Boilerplate, but I always find myself having to spend far too much time tweaking them to my liking before I can start working on a site.

So I decided to create a framework that would cut down my setup time. 18plate is simple - you have only the essentials. Just open `index.html`, `styles.css` and `scripts.js`, and you're off to the races.

### Simple

To make 18plate fast I keep it simple in comparison to many other frameworks. No `.htaccess` or `robots.txt` files, no multiple subfolders or favicons. Just the HTML, the CSS and the JS that you need.

The styles for the grid itself are short - less than 30 lines of code. JavaScript is included locally instead of relying on CDNs, there's no Google Analytics, and the base styles fit into about 50 lines of code.

### Flexible

Because 18plate is simple it is very flexible. The grid is fluid from a maximum of 1800px all the way down to mobile. Beyond that it's up to you to setup more breakpoints with media queries.

It includes Modernizr and Conditionizr to detect features, browser and even retina resolution. So out of the box you have everything you need make your site not just screen size aware but also browser and device aware.

### CSS Grid and Styles

The 18plate grid is based on a 12-column layout. There are twelve classes that allow you to specify everything from 1-column wide sections - `.col1`, all the way to 12-columns wide sections - `.col12`. With those classes you can create any sort of page structure - even divisions like three or four columns, or uneven combinations like 2:1, 1:5, 3:1, etc.

The base CSS is based on [normalize.css](http://git.io/normalize/), but with a few tweaks of my own, there are also a few parts I've taken from [HTML5 Boilerplate](http://www.iliadraznin.com/lab/18plate/github.com/h5bp/html5-boilerplate), and there are some of my own preferred styles such as global border-box sizing, transition for links and 62.5% global font size.

### Browser Support

There is no explicit support here for older browsers. I care little for IE6 or spending any time supporting it. As for other browsers, like older Firefox or IE7-9, any support is incidental and is a byproduct of normalizing the styles.

With that being said, the grid structure itself is simple and base styles are there to provide a consistent look across browsers, not add anything complex or fancy. So most browser - old or new, desktop or mobile, should be able to handle the 18plate framework with no problems out of the box. I've tested it in latest versions of Firefox, Chrome and IE9, as well as on Android smartphone and tablet.

### Scripts

The framework uses [jQuery](http://jquery.com/), [Modernizr](http://modernizr.com/) and [Conditionizr](http://conditionizr.com/) to give you a strong starting point for your scripts and offer flexibility to tailor your site to whatever device it's displayed on. All three are un-minified.

18plate loads jQuery locally not from CDN. Modernizr is included with all of its default feature tests. So use it to its full extent and when it comes time to publish replace it with it a customized version that only includes needed tests. Conditionizr is a tiny script that helps detect browser without relying on ugly conditional HTML statements.

### Structure

Start with the `.container` div that serves as the "big" wrapper around an entire block. It allows you to style the full width of the window while maintaining the central 1800-pixel wide block in the center. At widths below `1820px` it also adds `1em` padding on the sides of the content.

The .row class provides a wrapper for the columns and adds the maximum width style while also centering the block. Inside you put the columns using a combination of `.col` and one of `.col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11` and `col12` classes, that together should add up to 12 or less.

Finally make sure to use the `.fin` class on the last column of a row to remove the right margin.

### Sample Code

```
<article id="post-1" class="container">
    <header class="row">Article Title</header>
    <section class="meta row">
      <div class="col col4"><strong>Author</strong></div>
      <div class="col col4"><!-- blank padding --></div>
      <div class="col col4 fin"><em>Publish Date</em></div>
    </section>
    <section id="content-1" class="row">
      <div class="col col3">... article text here ...</div>
      <div class="col col3">... more article text ...</div>
      <div class="col col3">... yet again, text ...</div>
      <div class="col col3 fin">... finally done.</div>
    </div>
    <footer class="row">
      <div class="col col10"><!-- blank padding --></div>
      <div class="col col2 fin">Copyright &copy; Author</div>
    </footer>
</article>
```

### Acknowledgments

The 18plate framework is inspired by and borrows from work done by people much smarter than me. I'm just taking bits and pieces from projects all over the web and using them to construct my own "Franken-framework" of sorts. So it's only fitting to thank those that did all the original legwork.

[Paul Irish](http://paulirish.com/) and the team behind HTML5 Boilerplate did an awesome job of building a flexible and robust framework to make all web developers' lives easier.

[Nicolas Gallagher](http://nicolasgallagher.com/) and [Jonathan Neal](http://www.jonathantneal.com/)'s normalize.css is by far the most useful CSS "reset" I've encountered and I use it in every project I work on.

Last but not least, [Andy Taylor](http://andytaylor.me/) is the man behind the excellent [1140 CSS Grid](http://cssgrid.net/), which was the catalyst and inspiration for this project.
