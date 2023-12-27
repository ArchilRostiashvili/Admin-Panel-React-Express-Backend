

export const blockUsers = (selectedUsers) => {
    selectedUsers.map((usr) => {
      const blockU = async () => {
        await fetch('api/user/' + usr._id, {
          method: 'PATCH',
          headers: {
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

export const unblockUsers = (selectedUsers) => {
    selectedUsers.map((usr) => {
      const unblockU = async () => {
        await fetch('api/user/' + usr._id, {
          method: 'PATCH',
          headers: {
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

export const deleteUsers = (selectedUsers) => {
    selectedUsers.map((usr) => {
      const deleteU = async () => {
        await fetch('/api/user/' + usr._id, {
          method: 'DELETE',
          headers: {}
        })
      }

      deleteU();
    });
  };