import client from "./contentful-config";

export const getTags = async () => {
    try {
        const response = await  client.getTags();
  
        if(response) {
  
          if(response.items) {
  
            const data = response.items.map(item => ({
                name: item.name ?? '',
                id: item.sys.id ?? '',
            }))

            data.unshift({
                name: 'All',
                id: 'all'
            })

            return {
                status: true,
                data
            }
  
          }
  
        }
        
      } catch (error) {
          return {status:false, error: 'Error occured'}
      }
}