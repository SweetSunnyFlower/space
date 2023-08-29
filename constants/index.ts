export const SPACE_NAME = 'SweetSunnyFlower',
  LINKS = {
    Home: '/',
    Posts: '/posts',
    Weekly: '/weekly',
    Projects: '/projects',
    About: '/about'
  }

// PROMPT
export const SPACE = 'blog.gaobingbing.site',
  BRANCH = 'main',
  INIT_BLOG_VERSION = '1.0.0',
  FRAMEWORK = 'next',
  INIT_FRAMEWORK_VERSION = '13.4.10'

// CMDS
export const HELP = 'help',
  CLEAR = 'clear',
  LIST = 'list',
  LS = 'ls',
  ABOUT = 'about',
  POSTS = 'posts',
  PROJECTS = 'projects',
  INIT_CMD = HELP,
  COMMAND_NOT_FOUND = 'command not found',
  COMMANDS = [ABOUT, POSTS, HELP, LIST, LS, CLEAR, PROJECTS] as const

export type CommandsType = (typeof COMMANDS)[number]

export const COMMAND_CONTENT_MAP: Record<
  Exclude<CommandsType, 'clear'>,
  any
> = {
  [HELP]: {
    [HELP]: 'show details',
    [`${LIST}/${LS}`]: ['list all commands', COMMANDS],
    [CLEAR]: 'clear all outputs',
    [ABOUT]: 'some information about me',
    [POSTS]: 'list all posts',
    [PROJECTS]: 'list all projects'
  },

  [LIST]: COMMANDS,
  [LS]: COMMANDS,

  [ABOUT]: {
    introduction: `我是高兵兵, 前端API码农, 对CLI感兴趣, 喜欢音乐🎶数码和浩瀚宇宙🤣, 有个公众号【前端仓库】👈`,
    skills: ['javascript', 'typescript', 'vue', 'react', 'nodejs'],
    platforms: {
      segmentfault: 'https://segmentfault.com/u/hezizi/answers?sort=newest',
      juejin: 'https://juejin.cn/user/395479915963752/posts'
    }
  },

  [POSTS]: 'post',

  [PROJECTS]: 'project'
}
