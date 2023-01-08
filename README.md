# Rocinante theme for Hugo

Rocinante is a minimal and lightweight theme for hugo. It has minimal non-essential components, and supports normal blog posts and photoblogs. 

[Here][1] are some opinions used in building a theme. In short, extremely minimal footprint (under 5kB) with good contrast for accessibility.

######  [Demo link](https://sidverma.io/hugo-rocinante/)

![Rocinante Screenshot 1](https://raw.githubusercontent.com/mavidser/hugo-rocinante/master/images/tn.png)

![Rocinante Screenshot 2](https://raw.githubusercontent.com/mavidser/hugo-rocinante/master/images/screenshot.png)

## Features

- Pagination
- Tags support
- Mobile support
- RSS Feeds
- No essential Javascript
- Custom CSS support

The only javascript in the theme is for an optional enhancement to Email link, where it shows the email ID upon clicking such links. See the demo on the 'Email' link on [the demo website](https://sidverma.io/hugo-rocinante/). If javascript is disabled, it works as a normal link.

## Installation

Inside the folder of your Hugo site run:

    $ git submodule add https://github.com/mavidser/hugo-rocinante.git themes/rocinante

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

## Configuration options

Put these in the `params` section of config.toml

- **customCSS** - An array of paths to css files in the `assets` directory. Eg: `customCSS = ["css/style.css"]`.
- **mainSections** - An array containing either `"posts"`, `"photos"` or both. Only the content type listed in the array gets listed on the homepage. Eg: `mainSections = ["post", "photos"]`
- **email** - A string which will be used in the `mailto` link if smart email links are being used. Details on smart links are below, in the links option details. Eg: `email = "email@example.com"`
- **favicon** - A string of the favicon path in the `static` directory.  Eg: `favicon = "icon/favicon.jpg"`
- **about** - A string of the about text. This is slightly ugly, sorry. Eg: `about = """Hi. Welcome to my website"""`
- **links** - A table which contains array of `link` tables. This one is easier to explain using an example. Details of the link `table`:
  - name - String containing the text of the link
  - href - String containing URL of the link
  - new_tab = Boolean, to open link in a new tab
  - smart_email_link = Boolean. If true, a javascript snippet is included which changed link behavior. Text will change to the content of `email` param upon clicking once, after which it follows a `mailto:` link to the same. See example on the Email link in the about section of the demo page.
  
  Example:
  ```toml
  [[params.links]]
    [[params.links.link]]
      name = "About"
      href = "https://en.wikipedia.org/wiki/Don_Quixote"
      new_tab = true
      smart_email_link = true
  ```

## Getting started

After installing the theme successfully it requires a just a few more steps to get your site running.

### Update config file

Example:

```toml
baseURL = "https://example.com/"
languageCode = "en-us"
title = "Rocinante"
theme = "rocinante"
paginate = 3

[markup]
  [markup.highlight]
    style = "monokailight"
  [markup.goldmark.renderer]
    unsafe= true

[params]
  mainSections = ["posts", "photos"]
  email = "mail@example.com"
  favicon = "icons/favicon.png"
  about = """
About section. Enter details about you here.
"""

  [[params.links]]
    [[params.links.link]]
      name = "Resume"
      href = "/Resume.pdf"
    [[params.links.link]]
      name = "Email"
      href = "/contact"
      smart_email_link = true

  [[params.links]]
    [[params.links.link]]
      name = "Github"
      href = "https://github.com/"
      new_tab = true
    [[params.links.link]]
      name = "Mastodon"
      href = "https://mastodon.social/"
      new_tab = true
    [[params.links.link]]
      name = "Twitter"
      href = "https://twitter.com/"
      new_tab = true
    [[params.links.link]]
      name = "Instagram"
      href = "https://instagram.com/"
      new_tab = true
```

### Check your site

In order to see your site in action, run Hugo's built-in local server.

`$ hugo server`

Now enter [`localhost:1313`](http://localhost:1313/) in the address bar of your browser.

## License

MIT

[1]: https://sidverma.io/2020/03/07/website-updates#the-theme