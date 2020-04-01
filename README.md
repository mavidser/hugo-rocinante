# Rocinante theme for Hugo

######  [Demo link](https://sidverma.io/hugo-rocinante/)

Rocinante is a simple responsive blog theme with minimal non-essential components. It supports normal blog posts and photoblogs.

![Rocinante Screenshot 1](https://raw.githubusercontent.com/mavidser/hugo-rocinante/master/images/tn.png)

![Rocinante Screenshot 2](https://raw.githubusercontent.com/mavidser/hugo-rocinante/master/images/screenshot.png)

## Features

- Pagination
- Tags support
- Mobile support
- RSS Feeds
- No essential Javascript

The only javascript in the theme is for an optional enhancement to Email link, where it shows the email ID upon clicking such links. See the demo on the 'Email' link on [the demo website](https://sidverma.io/hugo-rocinante/). If javascript is disabled, it works as a normal link.

## Installation

Inside the folder of your Hugo site run:

    $ git submodule add https://github.com/mavidser/hugo-rocinante.git themes/rocinante

For more information read the official [setup guide](//gohugo.io/overview/installing/) of Hugo.

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
  favicon = "/icons/favicon.png"
  mainSections = ["posts", "photos"]
  email = "mail@example.com"
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

## Contributing

If you find a bug or have an idea for a feature, feel free to write an [issue](https://github.com/mavidser/hugo-rocinante/issues).

## License

MIT

