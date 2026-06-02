import React from 'react'

function Gallery({ params }: { params: Promise<{ id: string }> }) {
    const { id } = React.use(params)
    console.log("Id :", id);

    return (
        <div>Gallery</div>
    )
}

export default Gallery