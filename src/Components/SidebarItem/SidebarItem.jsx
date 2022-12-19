import React from 'react'

const SidebarItem = ({ category, selectedCategory,children }) => {
    return (
        <div style={{ backgroundColor: `${category === selectedCategory ? "grey" : "white"}` }}>
            {children}
        </div>
    )
}

//higherOrderComponent : HOC is a component will take another component as props and returns the same component by doing some modifications
// example :- modifications in styles

export default SidebarItem