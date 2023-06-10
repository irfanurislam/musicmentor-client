import { useQuery } from "@tanstack/react-query";

const useClass = () => {


    const {data: myClass = [], isLoading: loading, refetch} = useQuery({
        queryKey: ['myclass'],
        queryFn: async() => {
            const res = await fetch('http://localhost:5000/myclass');
            return res.json();
        }
    })

    return [myClass, loading, refetch]
}

export default useClass;