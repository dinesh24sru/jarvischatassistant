import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { CHAT_CONSTANTS } from "../../appConstant";

const initialState = {
  messages: [],
  spinner: false,
};

export const upsertOpenAIChat = createAsyncThunk(
  "chat/create",
  async (data) => {
    const system = {
      role: "system",
      content: `${CHAT_CONSTANTS.prompt}
  ${data.inputCode}`,
    };

    const url = CHAT_CONSTANTS.url;
    const params = {
      model: CHAT_CONSTANTS.model,
      messages: [system],
      temperature: 0,
    };
    let responseFromOpenAi = await axios.post(url, params, {
      headers: {
        Authorization: `Bearer ${CHAT_CONSTANTS.opneAiToken}`,
      },
    });
    return {
      message: responseFromOpenAi?.data?.choices[0]?.message?.content,
    };
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    toggleSpinner(state, action) {
      state.spinner = action.payload;
    },
    upsertUserMessage(state, action) {
      state.messages = [
        ...state.messages,
        { message: action.payload, isUser: true },
      ];
    },
  },
  extraReducers: {
    [upsertOpenAIChat.fulfilled]: (state, action) => {
      return {
        ...state,
        messages: [...state.messages, action.payload],
        spinner: false,
      };
    },
  },
});

export const { toggleSpinner, upsertUserMessage } = chatSlice.actions;

const { reducer } = chatSlice;

export default reducer;
