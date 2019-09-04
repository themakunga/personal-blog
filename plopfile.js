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
      {
        type: 'input',
        name: 'tags',
        message: 'list array comma separate',
      },
    ],
    actions: (d) =>
      {
        const actions = [];
        actions.push({
          type: 'add',
          path: 'src/_posts/'+todayDate+'-{{ snakeCase name }}.md',
          templateFile: 'templates/blogpost.md',
          data: {
            date: new Date().toISOString(),
            tagsArray: d.tags.split(", "),
          },
        });
        return actions;
      },
  });
};
