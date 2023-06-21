import {useMemo} from 'react'

export function FilteredList(){
    const objects = [
        {name: "Andy",
          id: 1,
          age: 30
        },
        {name: "Vlad",
          id: 2,
          age: 15
        },
        {name: "Richard",
          id: 3,
          age: 20
        }
    ]
        const adults = useMemo(()=>objects.map((obj)=> obj.age>18),[objects])


        return adults.name
    
}