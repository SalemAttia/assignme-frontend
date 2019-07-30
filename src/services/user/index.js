import config from'../../settings/config';
const endPoint = 'get-my-board';
export const getList = (limit = 10) => {
  return new Promise(resolve => {
    fetch(`${config.url}${endPoint}`, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
        "Content-type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImQ5ZmQyNjRmMzU3YTdiZmUzMWI5M2Q1NTdhNTNiOTUwYjhmYTYwZmMwNDJmOWM4MjJhZWY3MmM2MmMxNjVkMDBjNzJjMGE1YzUyZDcwYjU5In0.eyJhdWQiOiIxIiwianRpIjoiZDlmZDI2NGYzNTdhN2JmZTMxYjkzZDU1N2E1M2I5NTBiOGZhNjBmYzA0MmY5YzgyMmFlZjcyYzYyYzE2NWQwMGM3MmMwYTVjNTJkNzBiNTkiLCJpYXQiOjE1NjQ0MjgyNTUsIm5iZiI6MTU2NDQyODI1NSwiZXhwIjoxNTk2MDUwNjU1LCJzdWIiOiI0Iiwic2NvcGVzIjpbXX0.Vg02oxAT6SijIPYfEK88r2CInPx1G7W1_kELJWihP5ezf9Ef7HHLGygTTxnuvrPIw_KzkPEhTvVQH0RFqlB94wOeeZPqTt9FJf4Q1Cpzhtee-C7QIn2t-tlH4Y83UayldGE_q3nhVFsCHhNn09ks4B-lPJe5CS9101nyxYwaHzyQPhirDRvtfFueJSnGy19jinrDUGNBwGOxzuBrDS-53iX4HCMIicC6Nrt879CkxXod-9EZMRnFSuSyQMqEDtjfaxPbMozuysYtEIElISBkk6yvXiXr9de5vXNlkYMfQqn8AedkjI5zThfh3NmBLiVF06A-JX5IuG_1rHOoWuvyajwjH3X-BoJeXdV1k2s9tQgaFbyx3leZGJTMNncG2B_HgB9aTTJpAG5tpq_cVPmpVL75i7AEz7l7wZ4q1ct2S2f8ftpjCNdjzkcbluZZRHweV6bqMpsYXQbOgGl79iRt2YdQA3lFjtYVSvtKXxAS0NhEMqOPIidfvTb6_O05ys0afeWl7niCpaLLbozezGyRCyxbQh0fEbW0enBSNhEKzptnyTyBVDCuR7rLnchcQMedAcZamD-qVWmuG2y6vmICVLi8fy5Qesvit5BIPJbp06RPF3xlO8ziz9v93ADa6DYEEpkzzwdPQLojWjOkaZDT0kFOrFNisddTpmJfAI-AdRU"
      }
    }).then(
      response => response.json())
      .then(data => {
        resolve({
          boards: data.data
        })
      });

  });
};

export const getUsers = () => {
  return new Promise(resolve => {

        resolve({
          boards: [
            {
              id:1,
              name: 'test 1'
            },
            {
              id:2,
              name: 'test 2'
            }
          ]
        })
      });
};
