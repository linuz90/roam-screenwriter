# Roam Screenwriter

[Roam Research](https://roamresearch.com) is a a modern note-taking application that lets you connect your thoughts and ideas easily. Instead of worrying about links and folders, you write words in [[square brakets]] to make them link to other pages.

Applying this approach to screenwriting and storytelling is very powerful. Imaging typing a character name in a script, and have it instantly link to its character page, and appear as a reference everywhere it's mentioned (daily notes, other scenes, other characters pages...).

I've created this Screenwriting theme to style text in Roam so that you can easily write a screenplay with it, and take advantage of all the power of Roam.

👀 **[See a preview](#preview)**

💬 **[Give feedback or say hi](https://twitter.com/linuz90)**

🔥 **[Edit the theme](#editing-this-theme)**

# Install

1. Inside Roam Research, create a page named exactly `roam/css`

2. Create a `[[Roam Screenwriter]]` bullet point.

3. Create  **code block** inside it (you can write three backticks to create it: ```) and change it to **css**

4. Paste this in the code block `@import url("https://linuz90.github.io/roam-screenwriter/main.css");`

**Bonus:** I recommend having the font [Courier Prime](https://quoteunquoteapps.com/courierprime/) installed to use this theme.

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
