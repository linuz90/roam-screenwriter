# Roam Screenwriter

What if you could write screenplays with [Roam Research](https://roamresearch.com)? That's the question that made me build this theme.

Writing screenplays in Roam with this theme empowers storytelling with Roam strengths: bi-directional links, speed, dedicates pages to characters, and more.

I recommend having the font [Courier Prime](https://quoteunquoteapps.com/courierprime/) installed to use this theme.

👀 **[See a preview](#preview)**

💬 **[Give feedback or say hi](https://twitter.com/linuz90)**

🔥 **[Edit the theme](#editing-this-theme)**

# Install

1. Inside Roam Research, create a page named exactly `roam/css`

2. Create a `[[Roam Screenwriter]]` bullet point.

3. Create  **code block** inside it (you can write three backticks to create it: ```) and change it to **css**

4. Paste this in the code block `@import url("https://linuz90.github.io/roam-screenwriter/main.css");`

(this will load the [compiled css](https://linuz90.github.io/roam-screenwriter/main.css) in Roam)

It should look like this:

![](/assets/how-to.png)

With this system the theme will stay up to date automatically ⚡️

Check out a more extensive theming guide [here](https://nesslabs.com/roam-research-themes-custom-styling-css).

# How To Use

**The screenplay syntax in this theme is completely based on indentation.** To make it clear, when editing a block you’ll see an overlay in the bottom part of the screen that indicates the kind of block you’re editing.

Just press `Tab` and `Shift + Tab` to cycle through these block types:

* Scene (heading)
* Description
* Character (speaking)
* Dialogue
* Parenthetical

The order you see here corresponds to the indentation of the block, so unfortunately there’s a downside: to insert a block you can’t have “gaps” in the indentation.

Example: you can’t currently add a `Character` block directly under a `Scene` heading. You’ll need a `Description` block in between (which you can leave empty).

# Preview

Light:

![](/assets/preview-light.png)

When Dark Mode is enabled on your computer:

![](/assets/preview-dark.png)

# Editing this theme

To create this theme I'm using the **SCSS** syntax. This file is compiled into a regular **CSS** file used for the theme.

Please note that this theme imports my other theme [Better Roam Research](https://github.com/linuz90/better-roam-research) and uses it as a base. This is important also because I use a few variables here defined in the other theme.

To edit the theme, install [Ruby Sass](https://github.com/sass/ruby-sass) (it's not maintained anymore, will use something else in the future).

Then compile the SASS using this command:

`sass --sourcemap=none --no-cache --watch ./main.scss:./main.css`
