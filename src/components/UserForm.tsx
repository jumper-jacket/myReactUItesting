import React from 'react';

const UserForm = () => {

  return (
    <form data-testid="form">
    <div>
      <label htmlFor="username">ユーザー名</label>
      <input type="text" aria-label="ユーザー名"></input>
      <button type="submit">送信</button>
    </div>
    </form>

  );
};

export default UserForm;