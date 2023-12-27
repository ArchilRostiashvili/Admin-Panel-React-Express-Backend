export const blockUsers = (selectedUsers, user) => {
  selectedUsers.forEach((usr) => {
    const blockU = async () => {
      await fetch('http://localhost:4000/api/user/' + usr._id, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blocked: true
        }),
      });
    }

    blockU();
  });
};

export const unblockUsers = (selectedUsers, user) => {
  selectedUsers.forEach((usr) => {
    const unblockU = async () => {
      await fetch('http://localhost:4000//api/user/' + usr._id, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${user.token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          blocked: false
        }),
      });
    }
    unblockU();
  });
};

export const deleteUsers = (selectedUsers, user) => {
  selectedUsers.forEach((usr) => {
    const deleteU = async () => {
      await fetch('http://localhost:4000/api/user/' + usr._id, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      })
    }

    deleteU();
  });
};
