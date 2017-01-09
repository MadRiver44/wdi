#STATE and Lifecycles

- **State** is similar to props, but it is private and fully controlled by the component.
- **State** affects the rendering of a component(s)
- **State** can have initial/default values
- We can pass in components **state** data through props
- **State** can be initialized when code is loaded or state can be set on event changes
- **State** can be change with events (onClick, interval(system), onChange)
- **State** holds data which can change over time

#Best practice
### Constructor
- The only place where you can assign `this.state` is the constructor.

### setState
- WARNING!!! Do not change a state property directly
- Use the setState method

#Properties vs. State
- Data gets handle through State **AND** Props
- Props are defined when components are created/initialized 

# Lifecycles
- A component has a lifecycle --- a start and end
- The component lifecycle provides hooks for creation, lifetime, and teardown of components.
- Did and Will
-  Methods
	- componentWillMount
	-  componentDidMount
![](http://www.codevoila.com/uploads/images/201607/reactjs_component_lifecycle_functions.png) 

![](http://www.pdkpavan.com/tutorials/wp-content/uploads/2016/05/Screen-Shot-2016-05-10-at-12.58.01-AM.png)	
- Benefits/Use Case?
	- 	

TODO
- Use setInterval to show repaint/reflow changes

## Resources
[https://github.com/uberVU/react-guide/blob/master/props-vs-state.md](https://github.com/uberVU/react-guide/blob/master/props-vs-state.md)

[https://facebook.github.io/react/docs/state-and-lifecycle.html](https://facebook.github.io/react/docs/state-and-lifecycle.html)