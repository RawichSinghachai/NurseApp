import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'

type UserType = {
    id:string
    parentname:string,
    relation:string,
    phone:string,
    babyname:string,
    babyage:string,
    babybirthday:string,
    sex:string,
    registerdate:string,
    statuslogin:boolean,
    height:string[],
    weight:string[],
    datetocheck:string[],   
}

const initialState:UserType = {
    id: '',
    parentname:'',
    relation:'',
    phone:'',
    babyname:'',
    babyage:'',
    babybirthday:'',
    sex:'',
    registerdate:'',
    height:[],
    weight:[],
    datetocheck:[], 
    statuslogin:false,
}

export const UserDataStore = createSlice({
    name:'UserDataStore',
    initialState,
    reducers:{
        save:(state,action: PayloadAction<any>)=>{
            state.id = action.payload.decoded.id
            state.parentname = action.payload.decoded.parentname
            state.relation = action.payload.decoded.relation
            state.phone = action.payload.decoded.phone
            state.babyname = action.payload.decoded.babyname
            state.babyage = action.payload.decoded.babyage
            state.babybirthday = action.payload.decoded.babybirthday
            state.sex = action.payload.decoded.sex
            state.registerdate = action.payload.decoded.registerdate
            state.height = action.payload.decoded.height
            state.weight = action.payload.decoded.weight
            state.datetocheck = action.payload.decoded.datetocheck

            if(action.payload.status === 'success'){
                state.statuslogin = true
            }
            
        },
        checkcourse:()=>{
            return initialState
        },
    }
})

export const {save,checkcourse} = UserDataStore.actions
export default UserDataStore.reducer