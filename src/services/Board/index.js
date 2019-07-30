export const getBoard = () => {
  return new Promise(resolve => {

        resolve({
          columns: [
            {
              id:1,
              name: 'coulm 1',
              cards:[
                {
                  id:1,
                  name:'imag card',
                  type:'img',
                  content:'some random test',
                  img:'',
                  order:1,
                },
                {
                  id:2,
                  name:'label card',
                  type:'label',
                  content:'some random test',
                  img:'',
                  order:1,
                }
              ],
            },
            {
              id:2,
              name: 'column 2',
              cards:[
                {
                  id:2,
                  name:'salem',
                  type:'label',
                  content:'some random test',
                  img:'',
                  order:1,
                },
                {
                  id:2,
                  name:'salem',
                  type:'label',
                  content:'some random test',
                  img:'',
                  order:1,
                }
              ],
            },
           
          ]
        })
      });
};
