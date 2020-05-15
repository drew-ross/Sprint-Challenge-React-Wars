# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

    A: React JS is a library that allows developers to quickly build out UI components by combining JS with HTML-like syntax. React JS allows developers to compartmentalize their code into different components/files and build a website using a tree-like structure of components.

1. Describe component state.

    A: Components can hold various slices of state, allowing the webpage to keep track of variables and user interactions and update the UI as needed without reloading the page. React allows components to reload separately when a state change is detected, which helps maximize performance.

1. Describe props.

    A: Props are arguments passed into components, much like arguments passed into normal functions. A component invocation works like a normal function invocation but with different syntax. The developer passes props into components in a similar way to adding attributes to HTML tags. The props are used by the component to get information needed to render UI. In a React app, state variables and functions should be kept at the top of the hierarchy and passed down to child components through props.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

    A: Side effects are functions that are invoked on the reloading of a component. Side effects can also be set to invoke after only certain changes occur. The useEffect() function takes a callback, and an optional array. The array holds a list of states that useEffect can watch for changes. When there is a change to one of the states in the array, the function will be invoked.