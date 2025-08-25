import {useQuery} from '@tanstack/react-query';
import { fetchParents,fetchChildren } from '../api/invoices';

export function useParents(){
    useQuery({
        queryKey:['parents'],
        queryFn:fetchParents,
        staleTime:60_000
    })
}

export function useChildren(parentId){
    useQuery({
        queryKey:[],
        queryFn:()=>fetchChildren(parentId),
        enabled:!!parentId,
        staleTime:30_000
    })
}