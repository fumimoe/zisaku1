import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppThunk, RootState } from "../app/store";

interface TaskState {
  // taskがなんこあるか
  idCount: number;
  //   配列の中に入ってる→型定義。storeに保存するtask一覧
  tasks: { id: number; title: string; completed: boolean }[];
  //   taskを選択した時
  selectedTask: { id: number; title: string; completed: boolean };
  //   モーダル を開くかどうか
  isModalOpen: boolean;
}

const initialState: TaskState = {
  idCount: 1,
  tasks: [{ id: 1, title: "Task1", completed: false }],
  selectedTask: { id: 0, title: "", completed: false },
  isModalOpen: false,
};

export const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    // taskの作成
    // あくまでreducerなのでstateとactionを持つことができる
    createTask: (state, action) => {
      state.idCount++;
      const newTask = {
        id: state.idCount,
        // titleを受け取る
        title: action.payload,
        completed: false,
      };
      // 新しいtasksを生成する
      state.tasks = [newTask, ...state.tasks];
    },
   
  },
});


export const { createTask } = taskSlice.actions;

export const selectTasks = (state: RootState): TaskState["tasks"] =>
  state.task.tasks;

//  reducer以下をstore.tsに渡す
export default taskSlice.reducer;
