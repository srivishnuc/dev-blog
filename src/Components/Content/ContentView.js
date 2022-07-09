import React from 'react'
import SideTabList from '../SideTab/SideTabList'
import SuggestionList from '../Suggestion/SuggestionList'

function ContentView() {
    return (
        <>
            <SideTabList />
            <div className='col-span-9'>
                <h1 className='text-3xl font-bold underline'>ContentView</h1>
            </div>
            <SuggestionList />
        </>
    )
}


export default ContentView