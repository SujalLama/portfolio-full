export default function CardTags ({tags, grid} : {tags : string[], grid: boolean}) {

    if(tags.length === 0) return null;

    return( 
      <div className={`flex ${grid ? 'top-4 absolute' : 'mb-3'}`}>
        {
            tags.map((tag) => {
                
                return (
                    <Tag key={tag} tag={tag}/>
                )
            })
        }
      </div>)
}


function Tag ({tag} : {tag: string}) {
    
    return (
        <div key={tag}>
            <p className={`text-xs text-gray-600 rounded-sm px-2 py-1 bg-gray-200 mr-1`}>{tag}</p>
        </div>
    )
}