import { useState, useCallback } from "react"
/**
 * Renders an array of strings passed in that can be filtered and added to as an
 * unordered list.
 * @returns Component
 */


export default function Sidebar() {

// Menu items
  const initialMenuItems = ["MenuItem1", "MenutItem2", "MenuItem3"];

// Declaring a state variable (newMenuItem) and initializing it to an empty string
// We are adding strings to newMenuItem with setNewMenuItem
  let [newMenuItem, setNewMenuItem] = useState("");

  // TODO: 2 Using a state hook, maintain the current menu items as an array state.

// useState is the hook, initialMenuItems array is the inital value of menuItems
// This is why it starts out with these items on the react page
  let [menuItems, setMenuItems] = useState(initialMenuItems);

// This is for the fiter input section. 
  let [filter, setFilter] = useState("");
  // Adds a single string passed in as parameter to the state element
  // "menuItems" that holds the set of current menu items.

// Usig an arrow function to pass 
  let addMenuItem = useCallback(() => {
    if (newMenuItem.trim()) {
      setMenuItems((prevItems) => [newMenuItem, ...prevItems]);
      setNewMenuItem("");
    }


    //   // TODO: 3. Add a new menu item to the correct variable associated with this class.
    //   // This involves adding a parameter and changing a class instance variable (props).
    //   setMenuItems([item, ...menuItems])
  }, [newMenuItem]);

  // TODO: 4. Display ONLY the menu items that contain the filter element value
  // "term" in them. Each menu item should be an unordered list item wrapped in an unordered list (ul) element.

/* 
  Filter input is going to be lowercased in order to prevent
  user from having to distinguish between uppercase and lowercase.
  This will also prevent menu items from being distinguished by
  uppercase and lowercase
*/
  const filteredMenuItems = menuItems.filter((item) =>
  item.toLowerCase().includes(filter.toLowerCase()));

  // TODO: 1 Render inside the outer div an unordered list of the menu items, with each string in the array
  // its own item.

  return (
    <div>
      <ul>
        {filteredMenuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <input
        type="text"
        id="newMenuItemValue"
        value={newMenuItem}
        onChange={(event) => setNewMenuItem(event.target.value)}
      ></input>
      <br />
      <button
        onClick = {addMenuItem}
      >        
        Add Item
      </button>
      <br />
      <input
        id="filter"
        type="text"
        value={filter}
        onChange={(event) => setFilter(event.target.value)}
        placeholder="Filter by..."
      ></input>
      
    </div>
  )
}
