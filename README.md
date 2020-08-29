# Roam Screenwriter

What is [Roam Research](https://roamresearch.com)?

- Roam Research is a a modern note-taking application that lets you <ins>connect your thoughts and ideas easily</ins>.
- Instead of worrying about links and folders, you write words in [[square brakets]] to make them link to other pages.
- You can easily see where every page has been mentioned with automating backlinks.

What is special about writing screenplays in Roam?

- Characters names, locations, and anything else can be linked and backlinked everywhere.
- You can pair this with daily notes, which link back to actual blocks in the screenplay.
- You can reorder scenes and blocks easily.

**What is Roam Screenwriter?**

- It's a theme that styles Roam Research **to make screenplays will actually look like screenplays**, while you type them.
- It's made with actual screenwriters and storytelling needs in mind.
- It's made by Fabrizio Rinaldi, [say hi or give feedback on Twitter](https://twitter.com/linuz90).
- It loads a CSS file and some lines of Javascript in Roam to format all pages containing `[screenplay]` or `[script]` in their title as screenplays

Here's Roam Research **before** applying this theme:

![](/assets/before.png)

Here it is with the theme applied:

![](/assets/after.png)

It even adds Dark Mode support:

![](/assets/dark.png)

# Install this theme

This looks cumbersome but it takes a minute.

* Inside Roam Research, create a page named exactly `roam/css`

* Create a `[[Roam Screenwriter]]` bullet point.

* Create a child **code block** inside it (you can write three backticks to create it: ```) and change it to **css**

* Paste this in the code block `@import url("https://linuz90.github.io/roam-screenwriter/main.css");`

![](/assets/install-css.gif)

* Now type this inside any page (I used a "Scripts" page): `{{[[roam/js]]}}`

* Click on the red "I know what I'm doing" button and add a child code block inside, like on step 3 but set it to **javascript**

* *Paste this code inside it: `import("https://linuz90.github.io/roam-screenwriter/script.js")`

![](/assets/install-js.gif)

**Bonus:** I recommend having the font [Courier Prime](https://quoteunquoteapps.com/courierprime/) installed to use this theme.

Finally, here it is in action:

![](/assets/final-result.gif)

# How to use it

Add `[screenplay]` or `[script]` to any page title, and it will be formatted as a screenplay.

**The formatting is completely based on indentation.**

Indeed, just press `Tab` and `Shift + Tab` to cycle through these block types:

- Scene (heading)
- Description
- Character (speaking)
- Dialogue
- Parenthetical

The order you see here corresponds to the indentation of the block, so unfortunately there’s a downside: to insert a block you can’t have “gaps” in the indentation.

Example: you can’t currently add a `Character` block directly under a `Scene` heading. You’ll need a `Description` block in between (which you can leave empty).

# Contribute

To create this theme I'm using the **SCSS** syntax. This file is compiled into a regular **CSS** file used for the theme.

Please note that this theme imports my other theme [Better Roam Research](https://github.com/linuz90/better-roam-research) and uses it as a base. This is important also because I use a few variables here defined in the other theme.

To edit the theme, install [Ruby Sass](https://github.com/sass/ruby-sass) (it's not maintained anymore, will use something else in the future).

Then compile the SASS using this command:

`sass --sourcemap=none --no-cache --watch ./main.scss:./main.css`
