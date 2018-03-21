import * as React from 'react';
import { Provider } from 'react-redux';
import StudentList from './src/components/StudentList';
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <StudentList />
    </Provider >
  );
}
