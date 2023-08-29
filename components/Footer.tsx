import Icon from './Icon'

export default function Footer() {
  return (
    <footer className="text-sm mt-20 flex items-center text-gray-500 dark:text-slate-400">

      <a
        className="ml-3"
        href="https://github.com/sweetsunnyflower/space"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex">
          <p className="mr-3">sweetsunnyflower ©2023-present</p>
        </div>
      </a>
      <div className="flex">
        <p className="mr-3 ml-3">感谢:</p>
        <p>Created by hezizi</p>
      </div>
      <a
        className="ml-3"
        href="https://github.com/hezizi/space"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="github" width={20} height={20} />
      </a>
    </footer>

  )
}
