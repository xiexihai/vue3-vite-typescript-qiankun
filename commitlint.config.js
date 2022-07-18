module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新增特性(feature)
        'fix', //  修复bug
        'perf', //  优化相关，比如提升性能、体验
        'style', //  代码格式修改，不改变代码逻辑，如修改了空格、格式缩进、文件位置等等
        'refactor', //  代码重构，没有加新功能或者修复bug
        'revert', //   代码回退
        'chore', //  增加依赖库、工具等
        'build', // 变更项目构建或外部依赖，例如(webpack,gulp,npm 等)
        'test', // 测试相关，单元测试流程的开发
        'ci', // 更改持续继承软件的配置文件和 package 中的 scripts 命令
        'docs', // 仅仅修改了文档，比如README等等
      ],
    ],
    'type-case': [2, 'always', 'lowerCase'],
    'subject-empty': [2, 'never'],
  },
}