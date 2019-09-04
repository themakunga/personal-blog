const todayDate = new Date().toISOString().slice(0,10);
module.exports = (plop) => {
  plop.setGenerator('post', {
    description: 'new blog post',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'blog post name please',
      },
      {
        type: 'input',
        name: 'category',
        message: 'design a category',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/_posts/'+todayDate+'-{{ snakeCase name }}.md',
        templateFile: 'templates/blogpost.md',
        data: {
          date: todayDate,
        },
      },
    ],
  });
};
