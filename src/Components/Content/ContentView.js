import React from 'react'
import SuggestionList from '../Suggestion/SuggestionList'

function ContentView() {
    return (
        <>
            <div className='grid col-span-3'>
                <h1 className='text-3xl font-bold underline'>ContentView</h1>
            </div>
            <SuggestionList />
        </>
    )
}


export default ContentView