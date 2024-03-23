import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./constant";

const chatSLice=createSlice(
    {
        name:'chat',
        initialState:{
            messages:[]
        },
        reducers:{
            addMessage:(state,action)=>{
                if(state.messages.length>0){
                    state.messages.splice(OFFSET_LIVE_CHAT,1)
                }
              state.messages.push(action.payload);
            }
        }
    }
)
 export const {addMessage}=chatSLice.actions;
export default chatSLice.reducer;