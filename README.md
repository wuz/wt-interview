# About this submission

I've finished basically all of the functionality and wrote one test using React Testing Lib. If this were a real world app, I would want to write more tests, especially some integration tests, but this test checks the basic rendering functionality of the app. I implemented my standard process of handling CSS, using SCSS and a methodology for working with the cascade rather than against it.

## Approach

Here is a bit more information about my approach on a few different fronts.

### Code

For the code, I focused mostly on using features built into React - I don't mind reaching for third-party solutions when needed, but in the case React was able to handle everything I needed it to do. I used create-react-app to get this up and running and added support for SCSS to make styling a bit easier.

### Styling

My styling choices were based on a CSS methodology I've been working on for a while. The basic idea is to split up your CSS code to base make use of the cascade. The basic structure is to break files into `tokens`, `generics`, `objects/layouts`, `utilities`, and `components`.

**Tokens**: Things that don't generate CSS code on their own like variables, functions, mixins.

**Generics**: CSS that modifies the base HTML styles of elements. This is where _most_ of the styling in the app should live (though for this it's a bit light, since it's a small application.

**Layouts**: Layouts are commonly reused layout components - things like grids, flexbox, type flow, or [media objects](https://getbootstrap.com/docs/4.0/layout/media-object/)

**Utilities**: These are classes that are used to modify the styles of an element - usually they are a CSS selector with a single rule, which can be used to apply styles. These are useful for applying styles without adding code to a component SCSS file.

**Components**: These are files that define styles for single components. They should be kept super-light and refactored often - the goal is to make most code flow from a generic element, modified by a utility. RoomCard.scss is an example of a component SCSS file. At some point, if another component defined something like the thumbnail, that should be pulled into a layout/utility function (depending on what makes the most sense).

### Code Organization

Code organization is pretty straightforward - shared components are in the `components` folder, styles in `styles`. There are only two top level components - RoomApp and RoomCard, which render the main info on the page. If the app were more complicated, there might be a need for a router, in which case I'd move RoomApp/RoomCard to a subfolder and create a Router component to handle routing.

### Testing

I've only implemented one test, but here are my thoughts on it. Unit testing Javascript components can be useful, but for the most part integration tests are the best way to know that a system is working. Using something like React Testing Lib, you are at least testing the components in the way they are used. The test I've written is pretty simple and just checks that the component renders as expected and makes a network request.


