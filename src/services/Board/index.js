export const getBoard = () => {
  return new Promise(resolve => {

        resolve({
          cards: [
            {
              start: 'hello',
              end: 'team 1',
            },
            {
              start: 'bye',
              end: 'team 2'
            }
          ]
        })
      });
};
