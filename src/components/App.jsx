import Friends from './Friends/Friends';
import s from './App.module.css';

export const App = () => {
  return (
    <div
      className={s.container}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101',
      }}
    >
      <Friends />
    </div>
  );
};
