import "./techStack.css"

import { colors, data } from "../../data"

import React from 'react'
import { useState } from "react"

// Define a functional component named `TechStack`.
const TechStack = () => {

    // Using the `useState` hook to create a state variable `loadMoreTech` and a function `setLoadMoreTech` to update it.
    const [loadMoreTech, setLoadMoreTech] = useState(8)

    // Define a function `loadMore` which increments the value of `loadMoreTech` by 3 when called.
    const loadMore = () => {
       setLoadMoreTech((prev) => prev + 3) 
    }

    // The component renders JSX.
    return (
        <div className="container techStack-section" id="tech">
            <div className="section-title">
                <h2>Tech Stack</h2>
            </div>
            <div className="row">
                {/* Map over the first `loadMoreTech` items in the `data` array and render tech stack items. */}
                {data.slice(0, loadMoreTech).map((item, index) => (
                    <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12" key={index}>
                        <div className={index === 0 ? "tech-content-marked" : "tech-content"}>
                            {/* Render a colored circle with the index number. */}
                            <span className="tech-number" style={{ backgroundColor: colors[index] }}>
                                {index + 1}
                            </span>
                            <p>{item.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            {/* Render a "Load More" button if there are more items to load. */}
            {loadMoreTech >= data.length ? null : (
                <span className="load-more-tech-stack" onClick={loadMore}>
                    Load More...
                </span>
            )}
        </div>
    )
}

// Export the `TechStack` component as the default export of this module.
export default TechStack
