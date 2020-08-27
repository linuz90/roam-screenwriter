# Roam Screenwriter

What if you could write screenplays with [Roam Research](https://roamresearch.com)? That's the question that made me build this theme.

Writing screenplays in Roam with this theme empowers storytelling with Roam strengths: bi-directional links, speed, dedicates pages to characters, and more.

[See a preview below](#preview).

Got feedback? **[Say hi on Twitter](https://twitter.com/linuz90).**

Want to contribute? [Edit the theme](#editing-this-theme).

# How to use

1. Inside Roam Research, create a page named exactly `roam/css`

2. Create a `[[Roam Screenwriter]]` bullet point.

3. Nest this code inside it: \```css @import url("https://linuz90.github.io/roam-screenwriter/main.css");```

(this will load the [compiled css](https://linuz90.github.io/roam-screenwriter/main.css) in Roam)

It should look like this:

![](/assets/how-to.png)

With this system the theme will stay up to date automatically ⚡️

Check out a more extensive theming guide [here](https://nesslabs.com/roam-research-themes-custom-styling-css).

# Preview

Light:

![](/assets/preview-light.png)

When Dark Mode is enabled on your computer:

![](/assets/preview-dark.png)

# Editing this theme

To create this theme I'm using the **SCSS** syntax. This file is compiled into a regular **CSS** file used for the theme.

To edit the theme, install [Ruby Sass](https://github.com/sass/ruby-sass) (it's not maintained anymore, will use something else in the future).

Then compile the SASS using this command:

`sass --sourcemap=none --no-cache --watch ./main.scss:./main.css`
